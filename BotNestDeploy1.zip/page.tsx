
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Flower,
  Bot,
  Zap,
  Heart
} from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Lead Capture",
      description: "Never miss a customer again — even after hours."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Conversations",
      description: "Guided order intake that captures every important detail."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Sales",
      description: "Convert browsers into buyers with custom design requests."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Insights",
      description: "See what customers want, when they want it."
    }
  ];

  const benefits = [
    "Capture leads 24/7, even when your shop is closed",
    "Reduce response time from hours to seconds",
    "Eliminate third-party platform commissions and keep more of your sale",
    "Qualify leads automatically with smart questions",
    "Integrate seamlessly with your existing workflow",
    "Increase conversion rates by up to 40%",
    "Provide instant quotes and availability"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/brand/optimized/botnest_logo_horizontal.png"
                alt="BotNest"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Features
              </Link>
              <Link href="#demo" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Demo
              </Link>
              <Link href="/dashboard/leads" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Leads Dashboard
              </Link>
              <button className="btn-cta">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4A90E2]/5 to-[#34D399]/5">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/brand/optimized/background_pattern_1920.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative section-padding py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Never Miss a{' '}
                  <span className="text-gradient">Flower Order</span>{' '}
                  — Even When You're Closed.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  BotNest captures every inquiry 24/7, gathers full order details, and books custom conversations — while you focus on designing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo/bloom-blossom" className="btn-cta inline-flex items-center">
                  See Live Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="btn-primary">
                  Start Free Trial
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#34D399]" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#34D399]" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#34D399] rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BotNest Assistant</h3>
                    <p className="text-sm text-gray-500">Online now</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#4A90E2] text-white p-3 rounded-lg rounded-bl-none max-w-xs">
                    Hi! I can help you create a beautiful flower arrangement. What's the occasion?
                  </div>
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-lg rounded-br-none max-w-xs ml-auto">
                    I need flowers for my anniversary
                  </div>
                  <div className="bg-[#4A90E2] text-white p-3 rounded-lg rounded-bl-none max-w-xs">
                    Perfect! What's your budget range and preferred delivery date?
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>Lead captured in 30 seconds</span>
                  <Zap className="w-4 h-4 text-[#34D399]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F9FAFB]">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Florists Choose BotNest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered chatbots are specifically designed for the floral industry, 
              understanding the unique needs of flower shops and their customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Did You Know?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry data reveals the hidden costs of missed opportunities in the floral business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#4A90E2] mb-2">35%</div>
              <p className="text-gray-600 font-medium mb-1">of floral orders</p>
              <p className="text-sm text-gray-500">happen after hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#FF6F61] mb-2">12-15%</div>
              <p className="text-gray-600 font-medium mb-1">of sales lost</p>
              <p className="text-sm text-gray-500">from missed calls</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#34D399] mb-2">20-30%</div>
              <p className="text-gray-600 font-medium mb-1">commissions kept</p>
              <p className="text-sm text-gray-500">by third-party platforms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#9333EA] mb-2">18+</div>
              <p className="text-gray-600 font-medium mb-1">hours per week</p>
              <p className="text-sm text-gray-500">spent on admin tasks</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 italic">
              Source: FloraMetrics Industry Report / Small Business Trends 2024
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-[#F9FAFB]">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See BotNest in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how our chatbot transforms visitor interactions into qualified leads 
              for Bloom & Blossom Florists.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#4A90E2] to-[#34D399] p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Flower className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-semibold">Bloom & Blossom Florists</h3>
                    <p className="text-blue-100">Live Demo - Try the chatbot below</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-600 mb-4">Interactive chatbot demo</p>
                    <Link href="/demo/bloom-blossom" className="btn-primary">
                      Launch Demo
                    </Link>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#4A90E2] mb-1">4.2x</div>
                    <div className="text-sm text-gray-600">More leads captured</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#34D399] mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF6F61] mb-1">30s</div>
                    <div className="text-sm text-gray-600">Average response time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transform Every Visitor Into a Potential Customer
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our intelligent chatbots don't just answer questions – they actively guide 
                customers through the ordering process, capturing valuable lead information 
                along the way.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#34D399] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Lead Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#34D399] rounded-full"></div>
                    <span className="text-sm text-gray-500">Live</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#34D399]/10 border border-[#34D399]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Sarah M.</span>
                      <span className="text-sm text-[#34D399]">New Lead</span>
                    </div>
                    <p className="text-sm text-gray-600">Anniversary bouquet, $75-100, delivery Friday</p>
                  </div>
                  
                  <div className="bg-[#4A90E2]/10 border border-[#4A90E2]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Mike R.</span>
                      <span className="text-sm text-[#4A90E2]">Wants Call</span>
                    </div>
                    <p className="text-sm text-gray-600">Wedding flowers, $500+ budget, June 2024</p>
                  </div>
                  
                  <div className="bg-[#FF6F61]/10 border border-[#FF6F61]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Emma L.</span>
                      <span className="text-sm text-[#FF6F61]">Urgent</span>
                    </div>
                    <p className="text-sm text-gray-600">Sympathy arrangement, same-day delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Florist Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of florists who are already capturing more leads and growing their business with BotNest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#4A90E2] hover:bg-gray-50 font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <Link href="/demo/bloom-blossom" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4A90E2] font-medium px-8 py-4 rounded-lg transition-all duration-200">
                View Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374151] text-white py-12">
        <div className="section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/assets/brand/optimized/botnest_logo_horizontal_dark_bg.png"
                alt="BotNest"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-gray-300">
                BotNest: Helping florists capture leads, keep profits, and focus on what matters most — their craft.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-300">
                <div>Features</div>
                <div>Pricing</div>
                <div>Demo</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-300">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Setup Guide</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-300">
                <div>About</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BotNest. All rights reserved.</p>
            <p className="text-sm mt-2">
              BotNest operates as a lead capture system only. No payment processing occurs via BotNest platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
