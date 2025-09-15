// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Using the Geist font that comes with the template
import './globals.css'; // This imports the global styles we just updated
import Header from '@/components/Header'; // Import your soon-to-be-created Header
import Footer from '@/components/Footer'; // Import your soon-to-be-created Footer

// Configure your fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata for the entire site (Great for SEO)
export const metadata: Metadata = {
  title: {
    default: 'Karis Furniture - Handcrafted Heirloom Quality Furniture',
    template: '%s | Karis Furniture' // This will add "Karis Furniture" to the title of every other page
  },
  description: 'Karis Furniture creates custom, heirloom-quality woodwork, blending traditional techniques with modern design for clients who value lasting beauty and functionality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased"> 
        
        <Header />
        
        {/* The main content of each page is injected here */}
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}