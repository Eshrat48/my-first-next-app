// src/app/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, DollarSign, Calendar, SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEvents } from '@/contexts/EventContext';
import { ImageWithFallback } from '@/components/ImageWithFallback'; 

export default function HomePage() {
  const { events } = useEvents(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  
  // Filtering logic
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || event.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', 'Technology', 'Music', 'Education', 'Food', 'Business', 'Wellness'];

  // Component to render individual event cards
  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative group">
      {/* Event Image and Category Tag */}
      <div className="relative h-48">
        <ImageWithFallback 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover" 
          style={{ objectFit: 'cover' }}
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {event.category}
        </span>
      </div>

      {/* Event Details */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {event.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {event.shortDescription}
          </p>
          
          <div className="space-y-1 text-sm text-gray-700">
            <p className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              {event.location}
            </p>
            <p className="flex items-center font-semibold text-lg text-gray-800 pt-2">
              <DollarSign className="h-5 w-5 mr-1 text-green-600" />
              {event.price === 0 ? 'Free' : event.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* View Details Button */}
        <Link href={`/events/${event.id}`} className="mt-4 block">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <header className="bg-blue-600 text-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Discover Events</h1>
          <p className="text-blue-100 max-w-xl">
            Browse through our curated collection of events. Find something that inspires you and book your spot today.
          </p>
        </div>
      </header>

      {/* Search and Filter Section (Pulled up into the banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 z-10 relative">
        <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          
          {/* Search Input */}
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative md:w-48">
             <SlidersHorizontal className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer text-black"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* Simple down arrow for select box */}
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold text-gray-600 mb-6">
          Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
        </h2>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700">No Events Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </main>
    </div>
  );
}
