import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Using the Geist font that comes with the template
import './globals.css'; // This imports the global styles we just updated
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 
import AuthProvider from '@/providers/AuthProvider'

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
    template: '%s | Karis Furniture' 
  },
  description: 'Karis Furniture creates custom, heirloom-quality woodwork, blending traditional techniques with modern design for clients who value lasting beauty and functionality.',
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased"> 
        <AuthProvider>
           <Header />        
              <main >
                {children}
              </main>
            <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}