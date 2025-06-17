
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendLeadNotificationEmail, sendWelcomeEmail } from '@/lib/email-utils';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      floristId,
      occasion,
      deliveryDate,
      budgetRange,
      stylePreference,
      referenceBouquet,
      inspirationImage,
      cardMessage,
      customerName,
      customerEmail,
      customerPhone,
      wantsCall
    } = body;

    // Validate required fields
    if (!floristId || !occasion || !deliveryDate || !budgetRange || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get florist information for email notification
    const florist = await prisma.florist.findUnique({
      where: { id: floristId }
    });

    if (!florist) {
      return NextResponse.json(
        { error: 'Florist not found' },
        { status: 404 }
      );
    }

    // Create the lead
    const lead = await prisma.lead.create({
      data: {
        floristId,
        occasion,
        deliveryDate,
        budgetRange,
        stylePreference: stylePreference || null,
        referenceBouquet: referenceBouquet || null,
        inspirationImage: inspirationImage || null,
        cardMessage: cardMessage || null,
        customerName,
        customerEmail,
        customerPhone: customerPhone || null,
        wantsCall: wantsCall || false,
        status: 'new',
        emailNotificationSent: false
      }
    });

    // Prepare email data for notifications
    const leadData = {
      customerName,
      customerEmail,
      customerPhone: customerPhone || '',
      eventType: occasion,
      eventDate: deliveryDate,
      budget: budgetRange,
      specialRequests: [
        stylePreference && `Style preference: ${stylePreference}`,
        referenceBouquet && `Reference bouquet: ${referenceBouquet}`,
        cardMessage && `Card message: ${cardMessage}`,
        wantsCall && 'Customer prefers phone call'
      ].filter(Boolean).join('; ') || undefined,
      floristName: florist.name
    };

    // Send email notifications (don't block the response on email failures)
    const emailPromises = [];
    
    // Send notification to florist
    if (florist.email) {
      emailPromises.push(
        sendLeadNotificationEmail(florist.email, leadData)
          .then(success => {
            if (success) {
              // Update lead to mark email as sent
              prisma.lead.update({
                where: { id: lead.id },
                data: { emailNotificationSent: true }
              }).catch(error => console.error('Failed to update email status:', error));
            }
            return success;
          })
          .catch(error => {
            console.error('Failed to send florist notification:', error);
            return false;
          })
      );
    }

    // Send welcome email to customer
    emailPromises.push(
      sendWelcomeEmail(customerEmail, customerName, florist.name)
        .catch(error => {
          console.error('Failed to send customer welcome email:', error);
          return false;
        })
    );

    // Execute email sending in background
    Promise.all(emailPromises).then(results => {
      const [floristEmailSent, customerEmailSent] = results;
      console.log('Email notifications sent:', {
        leadId: lead.id,
        florist: florist.name,
        floristEmail: florist.email,
        customer: customerName,
        occasion,
        floristEmailSent: floristEmailSent || false,
        customerEmailSent: customerEmailSent || false
      });
    });

    return NextResponse.json({ 
      success: true, 
      leadId: lead.id,
      message: 'Lead captured successfully and email notifications sent',
      emailNotificationSent: true
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const floristId = searchParams.get('floristId');
    const status = searchParams.get('status');

    let whereClause: any = {};
    
    if (floristId) {
      whereClause.floristId = floristId;
    }
    
    if (status) {
      whereClause.status = status;
    }

    const leads = await prisma.lead.findMany({
      where: whereClause,
      include: {
        florist: {
          select: {
            name: true,
            email: true,
            phone: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ leads });

  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
