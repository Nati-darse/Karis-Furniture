import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types/contact';

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.interest || !formData.projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Connect to your email service (Resend, SendGrid, etc.)
    console.log('Form submission received:', formData);

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Implement actual email sending here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Karis Contact Form <onboarding@resend.dev>',
    //   to: 'your-email@karisfurniture.com',
    //   subject: `New Quote Request from ${formData.name}`,
    //   html: generateEmailTemplate(formData)
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}