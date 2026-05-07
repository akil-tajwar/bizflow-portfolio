'use client'

import Image from 'next/image'
import { useScrollFade } from './useScrollFade'

const clients = [
  { id: 1, name: 'Ispahani', logo: '/ispahani.png' },
  { id: 2, name: 'CNC', logo: '/cnc.png' },
  { id: 3, name: 'Pedrollo', logo: '/pedrollo.png' },
  { id: 4, name: 'Niyama', logo: '/niyama.png' },
  { id: 5, name: 'Fashion Food', logo: '/fashion-food-logo.png' },
  { id: 6, name: 'Continental Group', logo: '/continental-group-logo.png' },
]

export default function Clients() {
  useScrollFade()

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 fade-in">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: 'var(--accent)',
              background: 'rgba(37,99,235,0.08)',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            Trusted By
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
          >
            Our Happy Clients
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base leading-relaxed">
            Businesses across industries trust BizFlow to power their operations
            and drive growth.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`fade-in stagger-${(index % 4) + 1} group flex items-center justify-center p-6 rounded-2xl transition-all duration-300 cursor-default`}
              style={{ border: '1px solid #e8edf5' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'
                e.currentTarget.style.boxShadow =
                  '0 8px 30px rgba(37,99,235,0.08)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8edf5'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="relative w-full h-12">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
