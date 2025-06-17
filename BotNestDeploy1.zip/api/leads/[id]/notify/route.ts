
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const leadId = params.id;

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    // Update the lead to mark email notification as sent
    const updatedLead = await prisma.lead.update({
      where: { id: leadId },
      data: {
        emailNotificationSent: true,
        updatedAt: new Date()
      },
      include: {
        florist: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    console.log('Email notification marked as sent:', {
      leadId: updatedLead.id,
      florist: updatedLead.florist?.name,
      floristEmail: updatedLead.florist?.email,
      customer: updatedLead.customerName,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Email notification marked as sent',
      leadId: updatedLead.id
    });

  } catch (error) {
    console.error('Error marking email notification as sent:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
