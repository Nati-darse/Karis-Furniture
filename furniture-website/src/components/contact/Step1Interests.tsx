'use client';

import { FormStepProps, interestOptions } from '@/types/contact';

export default function Step1Interests({ formData, updateFormData, goToNextStep }: FormStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.interest) {
      goToNextStep();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">What brings you to Karis Furniture?</h2>
        <p className="text-gray-600 mt-2">{"Select what you're interested in"}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {interestOptions.map((option) => (
            <label
              key={option}
              className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                formData.interest === option
                  ? 'border-amber-600 bg-amber-50 ring-2 ring-amber-600'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                name="interest"
                value={option}
                checked={formData.interest === option}
                onChange={(e) => updateFormData({ interest: e.target.value })}
                className="sr-only"
                required
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{option}</p>
                  </div>
                </div>
                {formData.interest === option && (
                  <div className="shrink-0 text-amber-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!formData.interest}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}