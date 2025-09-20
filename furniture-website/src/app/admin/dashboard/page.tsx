'use client'

import { useState } from 'react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['Overview', 'Products', 'Testimonials', 'Leads', 'Settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`mr-8 py-4 px-1 text-sm font-medium ${
                  activeTab === tab.toLowerCase()
                    ? 'border-b-2 border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Total Products</h3>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Pending Leads</h3>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Testimonials</h3>
                  <p className="text-3xl font-bold">15</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Manage Products</h2>
              <p>Product management interface coming soon...</p>
            </div>
          )}

          {/* Add other tabs content */}
        </div>
      </div>
    </div>
  )
}