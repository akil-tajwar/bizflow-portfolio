'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    // Trigger fade-in on mount
    setTimeout(() => {
      el.querySelectorAll('.hero-fade').forEach((node, i) => {
        setTimeout(() => {
          (node as HTMLElement).style.opacity = '1'
          ;(node as HTMLElement).style.transform = 'translateY(0)'
        }, i * 150)
      })
    }, 100)
  }, [])

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1e3d 0%, #1a3a6b 50%, #1e4a8a 100%)' }}
    >
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/monitors.png"
          alt="Business Operations Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,30,61,0.85) 0%, rgba(26,58,107,0.75) 100%)' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #93c5fd, transparent)' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="hero-fade inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              background: 'rgba(37,99,235,0.2)',
              borderColor: 'rgba(59,130,246,0.4)',
              color: '#93c5fd',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Enterprise ERP & AI Solutions
          </div>

          {/* Heading */}
          <h1
            className="hero-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            Transform Your{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #34d399)' }}>
              Business Operations
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-fade text-lg lg:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            Streamline, automate, and optimize with our comprehensive ERP solutions, business intelligence, and AI-powered automation.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-fade flex flex-wrap gap-4"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <button
              onClick={() => handleScrollTo('#services')}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition"
            >
              Our Services
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Row */}
          <div
            className="hero-fade mt-16 flex flex-wrap gap-8"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
                <div className="w-px h-10 bg-blue-400/20 last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200/50">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Sora, sans-serif' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
