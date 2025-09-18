'use client';

import { FormStepProps, budgetOptions, timelineOptions } from '@/types/contact';

export default function Step2ProjectDetails({ formData, updateFormData, goToNextStep, goToPreviousStep }: FormStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.projectDescription) {
      goToNextStep();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Tell us about your project</h2>
        <p className="text-gray-600 mt-2">Help us understand your vision</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            rows={4}
            value={formData.projectDescription}
            onChange={(e) => updateFormData({ projectDescription: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
            placeholder="Describe your project, inspiration, specific requirements, etc."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
              Project Timeline
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => updateFormData({ timeline: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => updateFormData({ budget: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-amber-500 focus:ring-amber-500"
            >
              <option value="">Select budget</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            className="text-gray-600 px-6 py-3 rounded-full font-semibold hover:text-gray-800 transition-all"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={!formData.projectDescription}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}