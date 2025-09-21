export interface ContactFormData {
  interest: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  productName?: string; // For pre-filled product from gallery
}

export interface FormStepProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

export const interestOptions = [
  'Custom Dining Table',
  'Living Room Furniture',
  'Bedroom Set',
  'Outdoor Furniture',
  'Office Furniture',
  'Custom Cabinetry',
  'Restoration Project',
  'Other (Please describe in project details)'
];

export const budgetOptions = [
  'Under 1,000 Birr',
  '1,000 - 3,000 Birr',
  '3,000 - 5,000 Birr',
  '5,000 - 10,000 Birr',
  '10,000+ Birr'
];

export const timelineOptions = [
  'ASAP (Within 1 month)',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring options'
];