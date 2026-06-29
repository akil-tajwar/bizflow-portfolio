'use client'

import { useState } from 'react'
import { useScrollFade } from './useScrollFade'
import { sendEmail } from '@/app/(home)/actions'

const services = [
  'ERPNext Implementation',
  'Tableau Business Intelligence',
  'AI Agent Development',
  'Custom App Development',
  'Other',
]

export default function Contact() {
  useScrollFade()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    console.log('🚀 ~ handleSubmit ~ formData:', formData)

    // Create FormData object for the server action
    const formDataObj = new FormData()
    formDataObj.append('name', formData.name)
    formDataObj.append('email', formData.email)
    formDataObj.append('service', formData.service)
    formDataObj.append('message', formData.message)

    try {
      const result = await sendEmail(formDataObj)
      console.log('🚀 ~ handleSubmit ~ formDataObj:', formDataObj)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #0f1e3d 0%, #1a3a6b 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info - Keep as is */}
          <div className="fade-in-left">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{
                color: '#93c5fd',
                background: 'rgba(59,130,246,0.15)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              Get In Touch
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100/70 leading-relaxed mb-10 text-base">
              Get in touch with our experts to discuss how we can help
              streamline your operations and boost your productivity.
            </p>

            {/* Contact Details - Keep as is */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: 'Call Us',
                  value: '+880 1919-216460',
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email Us',
                  value: 'hello@bizflow.dev',
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: 'Business Hours',
                  value: 'Sun–Thu, 9:00 AM–5:00 PM',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                    style={{ background: 'rgba(59,130,246,0.15)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold text-blue-300/70 mb-0.5 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form with server action */}
          <div className="fade-in-right">
            <div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(52,211,153,0.2)' }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-blue-100/60 text-sm">
                    We&#39;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      className="block text-xs font-semibold text-blue-200/70 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-blue-200/30 bg-white/8 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-blue-200/70 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-blue-200/70 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 cursor-pointer"
                      style={{
                        background: 'rgba(26,58,107,0.8)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    >
                      <option
                        value=""
                        disabled
                        style={{ background: '#1a3a6b' }}
                      >
                        -- Select a service --
                      </option>
                      {services.map((s) => (
                        <option
                          key={s}
                          value={s}
                          style={{ background: '#1a3a6b' }}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-blue-200/70 mb-2 uppercase tracking-wider"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project or requirements..."
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl text-sm font-bold border border-blue-600/50 bg-blue-600/20 text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
