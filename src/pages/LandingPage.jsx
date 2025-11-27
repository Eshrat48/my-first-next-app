// src/pages/LandingPage.jsx

import Link from 'next/link'; 
// Note: next/link does not need "use client"

import { Calendar, Users, Ticket, TrendingUp, Zap, Shield, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Using alias
import Footer from '@/components/Footer'; // Using alias

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Discover Events That Inspire You
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of people discovering and attending amazing events. From tech conferences to music festivals, find your next unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Explore Events
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Why Choose EventHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to discover, manage, and attend events seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Easy Discovery',
                description: 'Find events that match your interests with our powerful search and filtering.',
              },
              {
                icon: Ticket,
                title: 'Quick Booking',
                description: 'Secure your spot in seconds with our streamlined booking process.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Connect with like-minded people and expand your network.',
              },
              {
                icon: Shield,
                title: 'Secure & Safe',
                description: 'Your data and payments are protected with enterprise-grade security.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '10K+', label: 'Events Hosted' },
              { number: '200+', label: 'Cities' },
              { number: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find events that match your interests across various categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Technology', icon: Zap, color: 'from-blue-500 to-blue-600' },
              { name: 'Music', icon: Star, color: 'from-purple-500 to-purple-600' },
              { name: 'Business', icon: TrendingUp, color: 'from-green-500 to-green-600' },
              { name: 'Education', icon: Calendar, color: 'from-yellow-500 to-yellow-600' },
              { name: 'Food', icon: Users, color: 'from-red-500 to-red-600' },
              { name: 'Wellness', icon: Clock, color: 'from-pink-500 to-pink-600' },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm text-gray-900">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied event-goers who trust EventHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Tech Enthusiast',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                text: 'EventHub made it so easy to find and attend the best tech conferences. I\'ve expanded my network tremendously!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Music Lover',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
                text: 'I never miss a great concert anymore. The app\'s recommendations are spot-on and booking is seamless.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Business Owner',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
                text: 'As an event organizer, EventHub has helped me reach more attendees and manage registrations effortlessly.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Discover Your Next Event?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join EventHub today and start exploring events that match your interests. It's free to get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}