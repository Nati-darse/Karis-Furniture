// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Header from '@/components/Header'; // We will create this next
// import Footer from '@/components/Footer'; // We will create this next

// Load a font (optional but nice)
const inter = Inter({ subsets: ['latin'] });

// Metadata for the entire site (good for SEO)
export const metadata: Metadata = {
  title: 'Karis Furniture - Where Craftsmanship Meets Elegance',
  description: 'Karis Furniture creates custom, heirloom-quality woodwork, blending traditional techniques with modern design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header appears on every page */}
        {/* <Header /> */}
        <main>{children}</main> {/* This is where page content (page.tsx) is injected */}
        {/* Footer appears on every page */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}