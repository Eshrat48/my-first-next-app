// src/pages/AddEventPage.jsx
"use client";

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, DollarSign, Users, Image as ImageIcon } from 'lucide-react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import { useEvents } from '@/contexts/EventContext'; 
import { toast } from 'sonner';

export default function AddEventPage() {
  const router = useRouter();
  const { addEvent } = useEvents();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    date: '',
    category: 'Technology',
    image: '',
    location: '',
    capacity: '',
  });

  const [errors, setErrors] = useState({});

  const categories = ['Technology', 'Music', 'Education', 'Food', 'Business', 'Wellness'];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required';
    }
    if (!formData.fullDescription.trim()) {
      newErrors.fullDescription = 'Full description is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!formData.capacity || parseInt(formData.capacity) <= 0) {
      newErrors.capacity = 'Valid capacity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const newEvent = {
      title: formData.title,
      shortDescription: formData.shortDescription,
      fullDescription: formData.fullDescription,
      price: parseFloat(formData.price),
      date: formData.date,
      category: formData.category,
      image: formData.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      location: formData.location,
      capacity: parseInt(formData.capacity),
    };

    addEvent(newEvent);
    toast.success('Event created successfully!');
    setLoading(false);
    
    router.push('/manage-events'); 
  };

  const handleGoBack = () => {
    router.back(); 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-2">Create New Event</h1>
          <p className="text-gray-600">Fill in the details below to create a new event</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm text-gray-700 mb-2">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="e.g., Tech Conference 2025"
              />
              {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
            </div>

            {/* Short Description */}
            <div>
              <label htmlFor="shortDescription" className="block text-sm text-gray-700 mb-2">
                Short Description <span className="text-red-500">*</span>
              </label>
              <input
                id="shortDescription"
                name="shortDescription"
                type="text"
                value={formData.shortDescription}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.shortDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="A brief one-line description (1-2 sentences)"
                maxLength={150}
              />
              {errors.shortDescription && <p className="mt-1 text-sm text-red-500">{errors.shortDescription}</p>}
              <p className="mt-1 text-xs text-gray-500">{formData.shortDescription.length}/150 characters</p>
            </div>

            {/* Full Description */}
            <div>
              <label htmlFor="fullDescription" className="block text-sm text-gray-700 mb-2">
                Full Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border ${errors.fullDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="Provide a detailed description of the event..."
              />
              {errors.fullDescription && <p className="mt-1 text-sm text-red-500">{errors.fullDescription}</p>}
            </div>

            {/* Price and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="99.00"
                />
                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
              </div>

              <div>
                <label htmlFor="date" className="block text-sm text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
              </div>
            </div>

            {/* Category and Capacity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="capacity" className="block text-sm text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  id="capacity"
                  name="capacity"
                  type="number"
                  min="1"
                  value={formData.capacity}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.capacity ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="100"
                />
                {errors.capacity && <p className="mt-1 text-sm text-red-500">{errors.capacity}</p>}
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="e.g., San Francisco, CA"
              />
              {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm text-gray-700 mb-2">
                <ImageIcon className="inline h-4 w-4 mr-1" />
                Image URL (Optional)
              </label>
              <input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-1 text-xs text-gray-500">Leave empty to use default image</p>
            </div>


            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={handleGoBack}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Event...' : 'Create Event'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}