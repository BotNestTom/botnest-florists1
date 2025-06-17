
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LeadsDashboard from '@/components/leads-dashboard';

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to BotNest
          </Link>
        </div>
        
        <LeadsDashboard />
      </div>
    </div>
  );
}
