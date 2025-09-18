import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Start Your Project
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tell us about your vision. We'll help bring it to life with custom craftsmanship.
        </p>
      </div>
      
      <ContactForm />
    </main>
  );
}

export const metadata = {
  title: 'Get a Quote | Karis Furniture',
  description: 'Request a custom furniture quote. Share your project details and we\'ll create something beautiful together.',
};