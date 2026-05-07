'use client'

import Image from 'next/image'
import { useScrollFade } from './useScrollFade'

const reasons = [
  {
    id: 1,
    title: 'Expert Implementation',
    description: 'Certified professionals with years of experience delivering complex ERP and BI solutions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '24/7 Support',
    description: 'Round-the-clock assistance whenever you need it. Our team is always ready to help.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Rapid Deployment',
    description: 'Quick implementation with minimal business disruption using our proven methodologies.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function About() {
  useScrollFade()

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="fade-in-left">
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
                style={{ color: 'var(--accent)', background: 'rgba(37,99,235,0.08)', fontFamily: 'Sora, sans-serif' }}
              >
                Why BizFlow
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-5"
                style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
              >
                Why Choose BizFlow?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10 text-base">
                At BizFlow, we specialize in transforming businesses through cutting-edge technology solutions. Our comprehensive approach combines enterprise resource planning, business intelligence, and artificial intelligence to create seamless, efficient operations.
              </p>
            </div>

            {/* Reasons */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`fade-in-left stagger-${index + 1} flex items-start gap-5 p-5 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-blue-100 cursor-default group`}
                  style={{ border: '1px solid #e8edf5' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                    style={{ background: 'rgba(37,99,235,0.1)' }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-base mb-1.5"
                      style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
                    >
                      {reason.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15">
                <Image
                  src="/modern_office.png"
                  alt="BizFlow Modern Office"
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(26,58,107,0.15) 0%, transparent 70%)' }}
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-blue-900/10"
                style={{ border: '1px solid #e8edf5' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(37,99,235,0.1)' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
                    >
                      200+
                    </div>
                    <div className="text-xs text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-blue-900/10"
                style={{ border: '1px solid #e8edf5' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
                  >
                    24/7 Active Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
