'use client'

import Image from 'next/image'

const footerLinks = {
  'About Us': ['Our Story', 'Why Choose BizFlow', 'Our Mission', 'Career News'],
  Services: [
    'ERPNext Implementation',
    'Tableau Business Intelligence',
    'AI Agent Development',
    'Custom App Development',
  ],
  Company: ['Contact Us', 'Get Support', 'Careers', 'Privacy Policy'],
}

export default function Footer() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer style={{ background: '#071326' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="BizFlow"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span
                className="font-bold text-xl text-white tracking-tight"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                BIZFLOW
              </span>
            </div>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-xs mb-6">
              Transforming businesses through innovative technology solutions. Let&apos;s make your business flow.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-300 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                style={{ background: 'rgba(59,130,246,0.12)' }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <span
                className="text-xs text-blue-200/40"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Follow us for updates and insights
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-white font-semibold text-sm mb-5"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-200/50 text-sm hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-blue-200/30 text-xs">
            © {new Date().getFullYear()} BizFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo(`#${item.toLowerCase()}`)
                }}
                className="text-blue-200/30 text-xs hover:text-blue-400 transition-colors duration-200"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
