// src/contexts/EventContext.jsx
"use client"; 

import { createContext, useContext, useState } from 'react';
const EventContext = createContext(undefined);

const initialEvents = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    shortDescription: 'Join us for the biggest tech conference of the year with industry leaders.',
    fullDescription: 'Tech Conference 2025 brings together the brightest minds in technology for three days of inspiring talks, workshops, and networking. Discover the latest innovations in AI, cloud computing, and software development. Connect with industry leaders and expand your professional network.',
    price: 299,
    date: '2025-03-15',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    location: 'San Francisco, CA',
    capacity: 500,
  },
  {
    id: '2',
    title: 'Summer Music Festival',
    shortDescription: 'Experience the best live music performances under the stars.',
    fullDescription: 'Summer Music Festival features over 50 artists across multiple stages. From rock to electronic, jazz to indie, there\'s something for every music lover. Enjoy food trucks, art installations, and unforgettable performances in a beautiful outdoor venue.',
    price: 149,
    date: '2025-07-20',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    location: 'Austin, TX',
    capacity: 5000,
  },
  {
    id: '3',
    title: 'Design Workshop',
    shortDescription: 'Learn modern design principles and tools from expert designers.',
    fullDescription: 'This intensive one-day workshop covers the fundamentals of modern design. Learn about typography, color theory, layout principles, and industry-standard tools like Figma and Adobe XD. Perfect for beginners and intermediate designers looking to level up their skills.',
    price: 99,
    date: '2025-04-10',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    location: 'New York, NY',
    capacity: 30,
  },
  {
    id: '4',
    title: 'Food & Wine Expo',
    shortDescription: 'Taste exceptional cuisine and fine wines from renowned chefs.',
    fullDescription: 'The Food & Wine Expo is a celebration of culinary excellence. Sample dishes from Michelin-star chefs, attend cooking demonstrations, and discover wines from boutique vineyards. A perfect event for food enthusiasts and industry professionals alike.',
    price: 175,
    date: '2025-05-22',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    location: 'Los Angeles, CA',
    capacity: 300,
  },
  {
    id: '5',
    title: 'Startup Pitch Night',
    shortDescription: 'Watch innovative startups pitch to top investors and VCs.',
    fullDescription: 'Startup Pitch Night showcases the most promising new companies in the tech ecosystem. Watch founders present their vision, business model, and traction to a panel of experienced investors. Network with entrepreneurs, investors, and fellow innovators.',
    price: 50,
    date: '2025-06-08',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    location: 'Boston, MA',
    capacity: 150,
  },
  {
    id: '6',
    title: 'Yoga & Wellness Retreat',
    shortDescription: 'Rejuvenate your mind and body with yoga, meditation, and wellness.',
    fullDescription: 'Escape to a peaceful mountain retreat for three days of yoga, meditation, and holistic wellness practices. Led by certified instructors, this retreat includes daily yoga sessions, guided meditation, nutritious meals, and workshops on mindfulness and stress management.',
    price: 499,
    date: '2025-08-12',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    location: 'Sedona, AZ',
    capacity: 40,
  },
];

export function EventProvider({ children }) {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: Date.now().toString(), 
    };
    setEvents([newEvent, ...events]); 
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const getEventById = (id) => {
    return events.find(event => event.id === id);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, getEventById }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider'); 
  }
  return context;
}