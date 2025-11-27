// pages/EventDetailsPage.tsx
"use client";

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, MapPin, DollarSign, Users, ArrowLeft, Clock, Ticket } from 'lucide-react';

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import { useEvents } from '@/contexts/EventContext'; 

import { toast } from 'sonner';

export default function EventDetailsPage() {
  const params = useParams();
  
  const eventId = params.eventId;
  
  const router = useRouter(); 
  const { getEventById } = useEvents();
    
  const event = getEventById(eventId);

  const formattedDate = event?.date 
    ? new Date(event.date).toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }) 
    : 'Date not available';


  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Link
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    toast.success(`Booking confirmed for ${event.title}! Check your email for details.`);
  };

  const handleGoBack = () => {
    router.back(); 
  };
  
  const handleCopyLink = async () => {
      const eventUrl = `${window.location.origin}/events/${event.id}`;
      try {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = eventUrl;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        toast.info('Event link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link: ', err);
        toast.error('Could not copy link. Please try manually.');
      }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleGoBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>

      {/* Hero Image and Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 font-semibold">
              {event.category}
            </div>
            <h1 className="text-4xl md:text-5xl mb-2 font-bold leading-tight">{event.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">About This Event</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </p>
            </div>

            {/* Event Highlights */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Key Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Detail Item: Date */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Date</p>
                    <p className="text-lg text-gray-900 font-semibold">{formattedDate}</p>
                  </div>
                </div>

                {/* Detail Item: Time */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Time</p>
                    <p className="text-lg text-gray-900 font-semibold">9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                {/* Detail Item: Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-lg text-gray-900 font-semibold">{event.location}</p>
                  </div>
                </div>

                {/* Detail Item: Capacity */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Capacity</p>
                    <p className="text-lg text-gray-900 font-semibold">{event.capacity} attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Booking Card) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-2xl p-8 sticky top-6 lg:top-24 border border-blue-100">
              
              {/* Price */}
              <div className="mb-6 border-b pb-4">
                <p className="text-lg text-gray-500 mb-1 font-medium">Ticket Price</p>
                <div className="flex items-baseline">
                  <DollarSign className="h-7 w-7 text-green-600 mr-1" />
                  <span className="text-5xl font-extrabold text-gray-900">
                    {event.price === 0 ? 'Free' : event.price.toFixed(0)}
                  </span>
                  {event.price > 0 && <span className="text-gray-500 ml-2">USD</span>}
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-300/50 mb-4 flex items-center justify-center space-x-3"
              >
                <Ticket className="h-6 w-6" />
                <span>Secure Your Spot Now</span>
              </button>

              <p className="text-xs text-gray-500 text-center mb-6">
                Free cancellation up to 24 hours before the event
              </p>

              {/* Event Stats */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="text-sm text-gray-900 font-semibold">{event.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Available Spots</span>
                  <span className="text-sm text-red-600 font-semibold">{event.capacity - 50} left</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Language</span>
                  <span className="text-sm text-gray-900 font-semibold">English</span>
                </div>
              </div>

              {/* Share */}
              <div className="border-t border-gray-200 mt-6 pt-6">
                <p className="text-sm text-gray-500 mb-3">Share this event</p>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-2 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm transition-colors text-center text-blue-600 font-medium"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this event: ${event.title}`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-2 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm transition-colors text-center text-blue-600 font-medium"
                  >
                    Twitter
                  </a>
                  <button 
                    onClick={handleCopyLink}
                    className="flex-1 px-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}