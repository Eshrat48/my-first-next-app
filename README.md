# EventHub - Event Management Platform

A modern, full-featured event management platform built with React, TypeScript, and Tailwind CSS. EventHub allows users to discover, book, and manage events with a polished UI and seamless user experience.

Live Link : [https://my-first-next-app-indol-iota.vercel.app/]
##  Features

### Public Pages
- **Landing Page** - Comprehensive homepage with 7 sections including hero, features, stats, categories, testimonials, and CTA
- **Event Listing** - Browse all events with search and category filtering
- **Event Details** - Detailed event information with booking capabilities

### Authentication
- **Login/Register** - Complete authentication system with:
  - Email/password credentials
  - Google OAuth integration
  - Form validation
  - Session management

### Protected Pages (Login Required)
- **Add Event** - Create new events with comprehensive form validation
- **Manage Events** - View, search, and delete your events in a responsive table/grid layout

## UI/UX Features

- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Consistent Design System** - Uniform spacing, colors, and typography
- **Interactive Elements** - Hover states, focus states, and smooth transitions
- **Toast Notifications** - User feedback for all actions
- **Protected Routes** - Automatic redirect to login for unauthorized access
- **Sticky Navigation** - Easy access to all pages
- **User Dropdown Menu** - Access to profile and management pages when logged in

## Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with all sections |
| `/events` | Public | Browse and search all events |
| `/events/:id` | Public | View detailed event information |
| `/login` | Public | User login with credentials or Google |
| `/register` | Public | New user registration |
| `/add-event` | Protected | Create new events (form with validation) |
| `/manage-events` | Protected | View and manage all events (table/grid) |

## Technologies Used

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Sonner** - Toast notifications
- **Context API** - State management for auth and events

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eventhub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📱 Application Structure

```
/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with auth dropdown
│   │   └── Footer.tsx          # Site footer with links
│   ├── contexts/
│   │   ├── AuthContext.tsx     # Authentication state management
│   │   └── EventContext.tsx    # Event data management
│   ├── pages/
│   │   ├── LandingPage.tsx     # Home page with 7 sections
│   │   ├── LoginPage.tsx       # Login form
│   │   ├── RegisterPage.tsx    # Registration form
│   │   ├── EventsPage.tsx      # Event listing with filters
│   │   ├── EventDetailsPage.tsx # Single event view
│   │   ├── AddEventPage.tsx    # Create event (protected)
│   │   └── ManageEventsPage.tsx # Event management (protected)
│   └── App.tsx                 # Main app with routing
```

## Authentication

The current implementation uses:
- **Mock Authentication** - Simulated login/register for demonstration
- **Local Storage** - Session persistence across page refreshes
- **Protected Routes** - Automatic redirect for unauthorized access

### For Production
Consider integrating:
- **Supabase** - For real authentication and database
- **Firebase Auth** - For Google OAuth and user management
- **NextAuth.js** - For comprehensive auth solution with Next.js

## Event Management

Events include:
- Title and descriptions (short and full)
- Price and date
- Location and capacity
- Category classification
- Event images
- Full CRUD operations (Create, Read, Delete)

## Key Features

### Landing Page Sections
1. **Navbar** - Sticky, responsive, with login/user dropdown
2. **Hero** - Eye-catching header with CTAs
3. **Features** - 4 key platform benefits
4. **Stats** - Platform metrics and achievements
5. **Categories** - Event type navigation
6. **Testimonials** - User reviews and ratings
7. **Footer** - Links, social icons, copyright

### Form Validation
- Real-time error messages
- Required field validation
- Type checking (email, number, date)
- Character limits on descriptions
- Inline validation feedback

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactive elements
- Optimized images and layouts

## Design System

### Colors
- **Primary**: Blue (600-700)
- **Secondary**: Indigo (600-700)
- **Success**: Green
- **Error**: Red (600)
- **Neutral**: Gray scale (50-900)

### Typography
- Clear hierarchy with semantic HTML
- Consistent sizing across pages
- Readable line heights and spacing

### Components
- Uniform card designs with hover effects
- Consistent button styles and states
- Form inputs with focus states
- Loading states for async actions

## State Management

- **AuthContext** - User authentication state
- **EventContext** - Event data and CRUD operations
- **Local Component State** - Form inputs and UI states

## Future Enhancements

- [ ] Real backend integration with Supabase/Express
- [ ] Event booking and ticketing system
- [ ] Payment processing
- [ ] User profiles and dashboards
- [ ] Event categories page
- [ ] Advanced search with multiple filters
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Calendar view for events
- [ ] Event reviews and ratings
- [ ] Social sharing functionality
- [ ] Admin panel for event approval

