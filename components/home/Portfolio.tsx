'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollFade } from './useScrollFade'
import { Popup } from '@/utils/popup'

const projects = [
  {
    id: 1,
    name: 'BizFlow HRIS',
    image: '/hris-demo.png',
    liveLink: 'https://hris-frontend-swart.vercel.app/',
    description:
      'A complete HR & attendance management system built for modern businesses — covering employee records, attendance, leave, payroll, and asset tracking in one place.',
    detailedDescription:
      'BizFlow HRIS is a full-featured human resource information system designed to replace scattered spreadsheets and manual processes with a single, streamlined platform. Built with a modern React and Node.js stack, it handles everything from day-to-day attendance tracking to complex payroll calculations, giving HR teams and employees a smooth, self-service experience.',
    functionalities: [
      {
        title: 'Employee Management',
        desc: 'Centralized employee profiles with documents, departments, designations, and employment history.',
      },
      {
        title: 'Attendance Tracking',
        desc: 'Clock-in/clock-out tracking, shift assignment, and automated late/absent detection.',
      },
      {
        title: 'Leave Management',
        desc: 'Leave requests, approval workflows, leave balances, and configurable leave policies.',
      },
      {
        title: 'Payroll & Salary',
        desc: 'Automated salary calculation, payslip generation, and salary structure configuration.',
      },
      {
        title: 'Shift Management',
        desc: 'Flexible shift scheduling and roster assignment for different teams and departments.',
      },
      {
        title: 'Asset Management',
        desc: 'Track company assets assigned to employees, including issue and return history.',
      },
      {
        title: 'Role-Based Access',
        desc: 'Granular permissions so employees, managers, and admins see only what they need to.',
      },
      {
        title: 'Reports & Analytics',
        desc: 'Attendance, leave, and payroll reports to help HR make data-driven decisions.',
      },
    ],
  },
]

type Project = (typeof projects)[0]

export default function Portfolio() {
  useScrollFade()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
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
            Our Work
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)', fontFamily: 'Sora, sans-serif' }}
          >
            Portfolio
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            A look at the products we&apos;ve built — real solutions solving
            real business problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`service-card bg-white rounded-2xl overflow-hidden fade-in stagger-${(index % 4) + 1}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Title + Live Link — flex justify-between items-center */}
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: 'var(--primary)',
                      fontFamily: 'Sora, sans-serif',
                    }}
                  >
                    {project.name}
                  </h3>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors duration-200"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live
                  </a>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* View Project Details — text-right + text-blue */}
                <div className="text-right">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group"
                    style={{
                      fontFamily: 'Sora, sans-serif',
                    }}
                  >
                    View Project Details
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
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Popup */}
      <Popup
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name ?? ''}
        size="max-w-4xl max-h-[85vh]"
      >
        {selectedProject && (
          <div>
            {/* Image */}
            <div className="relative h-96 w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Live link */}
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 mb-5 transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {selectedProject.liveLink}
            </a>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {selectedProject.detailedDescription}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-6" />

            {/* Functionalities, point by point */}
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{
                color: 'var(--primary)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              Key Functionalities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              {selectedProject.functionalities.map((item) => (
                <div
                  key={item.title}
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
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Popup>
    </section>
  )
}
