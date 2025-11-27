// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

import { AuthProvider } from '@/contexts/AuthContext'; 
import { EventProvider } from '@/contexts/EventContext';
import { Toaster } from 'sonner'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Event Ticketing App", 
  description: "A simple event management and booking platform built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <EventProvider>
            
            <Navbar/>
            {children}
            <Footer/>
            
            <Toaster position="bottom-center" richColors />
            
          </EventProvider>
        </AuthProvider>
      </body>
    </html>
  );
}