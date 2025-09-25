'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    products: 0,
    leads: 0,
    testimonials: 0,
    pendingLeads: 0
  })

  const [products, setProducts] = useState<any[]>([])
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    image: null as File | null
  })

  const [testimonials, setTestimonials] = useState<any[]>([])
  const [testimonialForm, setTestimonialForm] = useState({
    clientName: '',
    product: '',
    response: '',
    image: null as File | null
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    setStats({
      products: products.length,
      leads: 8,
      testimonials: testimonials.length,
      pendingLeads: 3
    })
  }

  // ----------------- Handlers -----------------
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProductForm(prev => ({ ...prev, [name]: value }))
  }

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductForm(prev => ({ ...prev, image: e.target.files![0] }))
    }
  }

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct = {
      ...productForm,
      id: products.length + 1,
      date: new Date().toISOString()
    }
    setProducts(prev => [...prev, newProduct])
    setProductForm({ name: '', description: '', price: '', image: null })
    fetchStats()
  }

  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTestimonialForm(prev => ({ ...prev, [name]: value }))
  }

  const handleTestimonialImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTestimonialForm(prev => ({ ...prev, image: e.target.files![0] }))
    }
  }

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTestimonial = {
      ...testimonialForm,
      id: testimonials.length + 1,
      date: new Date().toISOString()
    }
    setTestimonials(prev => [...prev, newTestimonial])
    setTestimonialForm({ clientName: '', product: '', response: '', image: null })
    fetchStats()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Products', value: stats.products, icon: '🛋️', bg: 'bg-amber-100' },
          { label: 'Leads', value: stats.leads, icon: '📥', bg: 'bg-green-100' },
          { label: 'Testimonials', value: stats.testimonials, icon: '⭐', bg: 'bg-blue-100' },
          { label: 'Pending', value: stats.pendingLeads, icon: '⚠️', bg: 'bg-red-100' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.bg} p-3 rounded-lg`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['overview', 'products', 'leads', 'testimonials', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mr-8 py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'products' && (
            <ProductsTab
              products={products}
              form={productForm}
              handleChange={handleProductChange}
              handleFileChange={handleProductImageChange}
              handleSubmit={handleProductSubmit}
            />
          )}
          {activeTab === 'leads' && <LeadsTab />}
          {activeTab === 'testimonials' && (
            <TestimonialsTab
              testimonials={testimonials}
              form={testimonialForm}
              handleChange={handleTestimonialChange}
              handleFileChange={handleTestimonialImageChange}
              handleSubmit={handleTestimonialSubmit}
            />
          )}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  )
}

// ----------------- Tab Components -----------------

function OverviewTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Business Overview</h2>
      <p className="text-gray-600">Quick stats and recent activity can be displayed here.</p>
    </div>
  )
}

// ----- Products Tab -----
type ProductsProps = {
  products: any[]
  form: { name: string; description: string; price: string; image: File | null }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

function ProductsTab({ products, form, handleChange, handleFileChange, handleSubmit }: ProductsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Product Management</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <div>
          <label className="block mb-1 font-medium">Upload Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
          Add Product
        </button>
      </form>

      {products.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-3">
          <h3 className="font-semibold mb-2">Uploaded Products</h3>
          <ul className="space-y-2">
            {products.map(p => (
              <li key={p.id} className="border p-3 rounded">
                <p><strong>Name:</strong> {p.name}</p>
                <p><strong>Description:</strong> {p.description}</p>
                <p><strong>Price:</strong> {p.price}</p>
                {p.image && <p><strong>Image:</strong> {p.image.name}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function LeadsTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lead Management</h2>
      <p className="text-gray-600">View and manage client inquiries.</p>
    </div>
  )
}

type TestimonialsProps = {
  testimonials: any[]
  form: { clientName: string; product: string; response: string; image: File | null }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

function TestimonialsTab({ testimonials, form, handleChange, handleFileChange, handleSubmit }: TestimonialsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Add Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="product"
          placeholder="Product Received"
          value={form.product}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="response"
          placeholder="Client Response"
          value={form.response}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <div>
          <label className="block mb-1 font-medium">{"Upload product's Image"}</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
          Add Testimonial
        </button>
      </form>

      {testimonials.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-3">
          <h3 className="font-semibold mb-2">Submitted Testimonials</h3>
          <ul className="space-y-2">
            {testimonials.map(t => (
              <li key={t.id} className="border p-3 rounded">
                <p><strong>Client:</strong> {t.clientName}</p>
                <p><strong>Product:</strong> {t.product}</p>
                <p><strong>Response:</strong> {t.response}</p>
                {t.image && <p><strong>Image:</strong> {t.image.name}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function SettingsTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <p className="text-gray-600">Update business details, contact info, and preferences here.</p>
    </div>
  )
}
