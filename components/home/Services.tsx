'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollFade } from './useScrollFade'
import { Popup } from '@/utils/popup'

const expertiseAreas = [
  {
    id: 1,
    title: 'ERPNext – Complete ERP Solution',
    image: '/demo_dashboard.png',
    description:
      "Leverage the full power of ERPNext, the world's most powerful open-source ERP system, to manage every aspect of your business.",
    detailedDescription:
      "ERPNext is a comprehensive, open-source ERP platform that covers every business function — from accounting and HR to manufacturing and CRM. At BizFlow, we specialize in tailoring ERPNext to fit your exact workflows, ensuring a smooth transition and maximum ROI. Whether you're a growing SME or a large enterprise, our certified team handles everything from initial setup to full-scale customization.",
    features: [
      'Accounting & Financial Reporting',
      'Inventory & Warehouse Management',
    ],
    detailedFeatures: [
      {
        title: 'Accounting & Financial Reporting',
        desc: 'Real-time P&L, balance sheets, cash flow statements, and automated tax compliance.',
      },
      {
        title: 'Inventory & Warehouse Management',
        desc: 'Multi-warehouse tracking, batch/serial number management, and automated reorder points.',
      },
      {
        title: 'HR & Payroll',
        desc: 'Employee lifecycle management, attendance tracking, and automated payroll processing.',
      },
      {
        title: 'CRM & Sales',
        desc: 'Lead tracking, sales pipeline management, and customer communication history.',
      },
      {
        title: 'Purchase & Procurement',
        desc: 'Vendor management, purchase orders, and supplier performance analytics.',
      },
      {
        title: 'Manufacturing',
        desc: 'Bill of materials, work orders, production planning, and quality control.',
      },
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Tableau – Business Intelligence',
    image: '/monitors.png',
    description:
      "Transform your raw data into actionable insights with Tableau's powerful analytics, interactive dashboards and visual reports.",
    detailedDescription:
      'Our Tableau implementation service turns your raw business data into stunning, interactive dashboards that drive smarter decisions. We connect Tableau to your existing data sources — ERPNext, SQL databases, Excel, or cloud platforms — and build custom visualizations tailored to your KPIs. From executive-level overviews to granular operational reports, we make data accessible to everyone in your organization.',
    features: [
      'Sales & Revenue Dashboards',
      'Inventory & Operational Analytics',
    ],
    detailedFeatures: [
      {
        title: 'Sales & Revenue Dashboards',
        desc: 'Real-time sales performance tracking, revenue trends, and target vs. actual comparisons.',
      },
      {
        title: 'Inventory & Operational Analytics',
        desc: 'Stock movement visualization, turnover rates, and supply chain bottleneck identification.',
      },
      {
        title: 'Executive KPI Scorecards',
        desc: 'High-level business health metrics with drill-down capabilities for detailed analysis.',
      },
      {
        title: 'Customer Analytics',
        desc: 'Customer segmentation, purchase behavior analysis, and churn prediction dashboards.',
      },
      {
        title: 'Financial Analytics',
        desc: 'Budget vs. actuals, profitability by product/region, and cash flow forecasting.',
      },
      {
        title: 'Automated Reporting',
        desc: 'Scheduled report delivery via email with auto-refresh dashboards for live data.',
      },
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'AI Agent Development',
    image: '/ai_automation.png',
    description:
      'Smart assistants and automation tools that transform how you handle business processes.',
    detailedDescription:
      'We build intelligent AI agents and automation systems that work around the clock to streamline your operations. From customer-facing chatbots that resolve queries instantly to backend automation that eliminates repetitive tasks, our AI solutions integrate seamlessly with your existing tools — including ERPNext and Tableau. Built on the latest LLM technologies, our agents learn and improve over time.',
    features: ['Intelligent Support Bots', 'Automated Business Workflows'],
    detailedFeatures: [
      {
        title: 'Intelligent Support Bots',
        desc: 'AI-powered chatbots for customer support, HR queries, and internal helpdesks — available 24/7.',
      },
      {
        title: 'Automated Business Workflows',
        desc: 'End-to-end workflow automation that triggers actions across your ERP, email, and CRM systems.',
      },
      {
        title: 'Document Processing',
        desc: 'Intelligent extraction and processing of invoices, contracts, and forms using OCR and NLP.',
      },
      {
        title: 'Predictive Analytics',
        desc: 'AI models that forecast demand, flag anomalies, and recommend actions based on your data.',
      },
      {
        title: 'ERPNext AI Integration',
        desc: 'AI agents directly integrated into ERPNext for smart data entry, approvals, and alerts.',
      },
      {
        title: 'Custom LLM Solutions',
        desc: 'Fine-tuned language models trained on your business data for highly relevant outputs.',
      },
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Custom App Development',
    image: '/demo_dashboard_2.png',
    description:
      'Tailor-made applications combining ERPNext capabilities with advanced Business Intelligence features.',
    detailedDescription:
      "When off-the-shelf software doesn't cut it, we build exactly what your business needs. Our custom app development team creates web and mobile applications that integrate deeply with ERPNext and your BI stack. Whether it's a customer portal, a field operations app, or an internal tool — we design and develop with scalability, performance, and user experience as top priorities.",
    features: ['Mobile & Web Applications', 'API Integration & Automation'],
    detailedFeatures: [
      {
        title: 'Mobile & Web Applications',
        desc: 'Cross-platform apps built with modern frameworks, optimized for speed and usability.',
      },
      {
        title: 'API Integration & Automation',
        desc: 'Seamless connections between ERPNext, third-party services, payment gateways, and more.',
      },
      {
        title: 'Customer & Vendor Portals',
        desc: 'Self-service portals where customers and vendors can track orders, invoices, and communications.',
      },
      {
        title: 'ERPNext Custom Modules',
        desc: 'Bespoke ERPNext doctypes and workflows tailored precisely to your business processes.',
      },
      {
        title: 'Progressive Web Apps',
        desc: 'Fast, offline-capable PWAs that work seamlessly on any device without app store installs.',
      },
      {
        title: 'System Migrations',
        desc: 'Safe, zero-downtime migrations from legacy systems to modern ERPNext-based architecture.',
      },
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

type ExpertiseArea = (typeof expertiseAreas)[0]

export default function Services() {
  useScrollFade()
  const [selectedService, setSelectedService] = useState<ExpertiseArea | null>(
    null
  )

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: 'var(--accent)',
              background: 'rgba(37,99,235,0.08)',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
          >
            Our Expertise Areas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            We combine enterprise-grade tools with custom development to deliver
            solutions that truly transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((service, index) => (
            <div
              key={service.id}
              className={`service-card bg-white rounded-2xl overflow-hidden fade-in stagger-${(index % 4) + 1}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div
                  className="card-icon absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                  style={{
                    background: 'rgba(26,58,107,0.85)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: 'var(--primary)',
                    fontFamily: 'Sora, sans-serif',
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(37,99,235,0.1)' }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More — now opens popup */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'Sora, sans-serif',
                  }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Popup */}
      <Popup
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title ?? ''}
        size="max-w-3xl max-h-[85vh]"
      >
        {selectedService && (
          <div>
            {/* Image */}
            <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Icon overlay */}
              <div
                className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{
                  background: 'rgba(37,99,235,0.85)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {selectedService.icon}
              </div>
            </div>

            {/* Detailed description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {selectedService.detailedDescription}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-6" />

            {/* Detailed features */}
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{
                color: 'var(--primary)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              What&apos;s Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedService.detailedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{
                    background: 'rgba(37,99,235,0.04)',
                    border: '1px solid rgba(37,99,235,0.08)',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(37,99,235,0.12)' }}
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <div
                      className="text-xs font-semibold mb-0.5"
                      style={{
                        color: 'var(--primary)',
                        fontFamily: 'Sora, sans-serif',
                      }}
                    >
                      {feature.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setSelectedService(null)
                setTimeout(() => {
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }, 150)
              }}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
              style={{
                background: 'var(--accent)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              Get Started with This Service
            </button>
          </div>
        )}
      </Popup>
    </section>
  )
}
