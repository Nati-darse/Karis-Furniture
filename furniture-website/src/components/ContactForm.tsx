'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types/contact';
import Step1Interests from './contact/Step1Interests';
import Step2ProjectDetails from './contact/Step2ProjectDetails';
import Step3ContactInfo from './contact/Step3ContactInfo';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>({
    interest: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const updateFormData = (data: Partial<ContactFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const goToNextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const stepProps = {
    formData,
    updateFormData,
    goToNextStep,
    goToPreviousStep
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= step
                    ? 'bg-amber-600 border-amber-600 text-white'
                    : 'border-gray-300 bg-white text-gray-400'
                }`}
              >
                {step}
              </div>
              <span className="text-sm mt-2 text-gray-600">Step {step}</span>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="h-0.5 w-full bg-gray-300"></div>
          </div>
          <div className="relative flex justify-between">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {currentStep === 1 && <Step1Interests {...stepProps} />}
        {currentStep === 2 && <Step2ProjectDetails {...stepProps} />}
        {currentStep === 3 && <Step3ContactInfo {...stepProps} />}
      </div>

      {/* Support Info */}
      <div className="text-center mt-12 text-gray-600">
        <p>Prefer to talk directly? Call us at <strong>(+251)-968-339-600</strong></p>
        <p className="text-sm mt-2">We typically respond within 24 hours</p>
      </div>
    </div>
  );
}