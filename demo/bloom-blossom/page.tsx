
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Phone, Mail, Star } from 'lucide-react';
import { prisma } from '@/lib/db';
import BouquetGallery from '@/components/bouquet-gallery';
import ChatWidget from '@/components/chat-widget';

export const dynamic = 'force-dynamic';

async function getFloristData() {
  const florist = await prisma.florist.findFirst({
    where: {
      email: 'contact@bloomandblossom.com'
    },
    include: {
      bouquets: true
    }
  });
  
  return florist;
}

export default async function FloristDemoPage() {
  const florist = await getFloristData();
  
  if (!florist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Florist not found</h1>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const hours = florist.hours as any;
  const specialties = florist.specialties as string[];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-gray-600 hover:text-[#4A90E2] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to BotNest</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#34D399] rounded-full"></div>
              <span className="text-sm text-gray-600">Live Demo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-green-50 py-16">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/assets/brand/optimized/background_pattern_1920.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {florist.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Creating beautiful moments with fresh, handcrafted floral arrangements
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#4A90E2]" />
                  <span>{florist.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#4A90E2]" />
                  <span>{florist.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#4A90E2]" />
                  <span>{florist.email}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">4.9/5 (127 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <Clock className="w-8 h-8 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>{hours.monday_friday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>{hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>{hours.sunday}</span>
                </div>
              </div>
            </div>

            <div className="card text-center">
              <div className="w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Promise</h3>
              <div className="space-y-2 text-gray-600">
                <div>Fresh flowers daily</div>
                <div>Same-day delivery</div>
                <div>100% satisfaction guarantee</div>
              </div>
            </div>

            <div className="card text-center">
              <div className="w-8 h-8 bg-[#FF6F61] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">♥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h3>
              <div className="space-y-1 text-gray-600 text-sm">
                {specialties.slice(0, 3).map((specialty, index) => (
                  <div key={index}>{specialty}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouquet Gallery */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Beautiful Bouquets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handcrafted arrangements, perfect for every occasion. 
              Each bouquet is made with the freshest flowers and designed with love.
            </p>
          </div>
          
          <Suspense fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          }>
            <BouquetGallery bouquets={florist.bouquets} />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg">
        <div className="section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you create the perfect floral arrangement for your special occasion. 
              Our expert florists are here to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#4A90E2] hover:bg-gray-50 font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Call Now: {florist.phone}
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4A90E2] font-medium px-8 py-4 rounded-lg transition-all duration-200">
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374151] text-white py-8">
        <div className="section-padding text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{florist.name}</h3>
            <p className="text-gray-300">{florist.location}</p>
            <p className="text-gray-300">{florist.phone} • {florist.email}</p>
          </div>
          <div className="border-t border-gray-600 pt-4 text-gray-400">
            <p>&copy; 2025 {florist.name}. All rights reserved.</p>
            <p className="text-sm mt-2">
              Powered by{' '}
              <Link href="/" className="text-[#4A90E2] hover:text-[#34D399] transition-colors">
                BotNest
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget floristId={florist.id} />
    </div>
  );
}
