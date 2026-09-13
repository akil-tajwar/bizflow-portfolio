'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FileText, ExternalLink } from 'lucide-react'
import { useScrollFade } from './useScrollFade'
import { Popup } from '@/utils/popup'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const projects = [
  {
    id: 1,
    name: 'HRIS',
    image: '/hris-demo.png',
    sourceLink: '/HRIS_Features.pdf',
    liveLink: 'https://hris-frontend-swart.vercel.app/',
    description:
      'A complete HR & attendance management system with an AI assistant built in — covering automated punch processing, leave, payroll, shifts, and assets in one place.',
    detailedDescription:
      'HRIS is a full-featured human resource information system designed to replace scattered spreadsheets and manual processes with a single, streamlined platform. Built with Next.js, TypeScript, and a Node.js/Express + Drizzle ORM backend, it handles everything from automated attendance processing to complex payroll calculations — with an AI assistant on top that lets HR teams just ask questions about their data in plain language.',
    functionalities: [
      {
        title: 'AI HR Assistant',
        desc: 'A built-in AI chatbot that answers natural-language questions like "did John arrive yet?" or "how many punches today for John?" directly from live HR data.',
      },
      {
        title: 'Automated Attendance Processing',
        desc: 'Punch data is automatically validated against shift configurations, with computed statuses (Late, Half Day) and gross vs. net overtime calculated on the fly.',
      },
      {
        title: 'Bulk Attendance Upload',
        desc: 'Excel-based bulk upload workflow with auto-generated templates, spreadsheet parsing, and batch processing of punch records.',
      },
      {
        title: 'Employee Self-Service Attendance',
        desc: 'A dedicated apply page lets employees submit attendance requests, with a two-stage HR/reporting-authority approval flow and re-application controls.',
      },
      {
        title: 'Shift & Roster Management',
        desc: 'Bulk shift allocation by employee or department, configurable shift/week-day rules, and detailed shift reporting.',
      },
      {
        title: 'Leave Management',
        desc: 'Leave application with automatic day-count calculation, approval workflows, and configurable leave policies.',
      },
      {
        title: 'Payroll & Salary Structuring',
        desc: 'Configurable salary components and calculation types, with a full payroll management workflow.',
      },
      {
        title: 'Asset Management',
        desc: 'Tracks company assets issued to employees, with full issue/return transaction history.',
      },
      {
        title: 'Holiday Calendar',
        desc: 'A visual month-by-month calendar view of company holidays, color-coded by holiday type.',
      },
      {
        title: 'Notifications & Notice Board',
        desc: 'Built-in notification system and a company-wide notice board for announcements.',
      },
      {
        title: 'Company Policy Management',
        desc: 'Versioned company policies per year, with only one active policy per company/year at a time.',
      },
      {
        title: 'Individual Attendance Reports',
        desc: 'Per-employee attendance reports with summary cards and one-click Excel export.',
      },
    ],
  },
  {
    id: 2,
    name: 'BizPos',
    image: '/bizpos-demo.png',
    sourceLink: '/BizPos_Features.pdf',
    liveLink: 'https://www.bizpos.cloud/',
    description:
      'A multi-tenant SaaS point-of-sale system for retail businesses — covering sales, purchasing, multi-store inventory, and financial accounts, with offline sales support via PWA.',
    detailedDescription:
      'BizPos is a full-stack, multi-tenant SaaS POS system built for small-to-medium retail businesses. Built with Next.js 14 (App Router), TypeScript, and a Node.js/Hono backend on Drizzle ORM and PostgreSQL, it covers the complete retail workflow — sales invoicing, purchase orders, multi-store inventory with weighted-average costing, and a full cash/bank ledger — with Redis-backed sessions and a PWA offline mode that lets staff keep selling through internet outages.',
    functionalities: [
      {
        title: 'Sales Invoicing & Payments',
        desc: 'Draft-to-confirm invoice workflow with product/customer search, per-line discounts and tax, and support for cash, bank, credit, and split/partial payments.',
      },
      {
        title: 'Automatic Cost & Profit Tracking',
        desc: "Every sale calculates cost of goods sold from the product's live weighted-average cost, giving gross profit per line item and per invoice with no manual entry.",
      },
      {
        title: 'Offline Sales (PWA)',
        desc: 'Detects backend unreachability separately from device connectivity, queues sales in IndexedDB while offline, and auto-syncs and confirms them on reconnect, with a dedicated sync-log screen for retries.',
      },
      {
        title: 'Purchase Orders & Goods Receiving',
        desc: 'Vendor purchase orders with status tracking (draft, sent, partially received, received), linked goods-receipt notes that support partial deliveries against the same order.',
      },
      {
        title: 'Weighted Average Cost (WAC) Inventory Costing',
        desc: "Automatically recalculates each product's average cost on every goods receipt using a weighted-average formula, keeping profit figures accurate as purchase prices change.",
      },
      {
        title: 'Multi-Store Inventory & Transfers',
        desc: 'Per-store stock levels with a full audit trail of every movement (sale, receive, adjustment, transfer, damage, return, opening balance), plus a pending-to-completed inter-store transfer workflow.',
      },
      {
        title: 'Customer & Vendor Ledgers',
        desc: 'Running balance ledgers for customers (credit sales/payments) and vendors (purchases/payments), each with full chronological statement history.',
      },
      {
        title: 'Product Catalog with Variants & UOMs',
        desc: 'Categories, subcategories, and brands, plus product variants (e.g. size/color) and multiple units of measure per product with configurable conversion factors and pricing.',
      },
      {
        title: 'Cash & Bank Account Management',
        desc: 'Multiple cash-drawer and bank accounts with opening balances, a fully automatic transaction ledger (deposits, withdrawals, receipts, payments, transfers), and account-to-account transfers.',
      },
      {
        title: 'Expense Tracking',
        desc: 'Custom expense categories ("heads") with one-click expense entry that automatically deducts from the linked cash or bank account.',
      },
      {
        title: 'Real-Time Business Dashboard',
        desc: 'Role-based dashboard showing today/month sales and gross profit, a 14-day sales trend, category margin breakdown, payment-mode split, top products, outstanding receivables, and combined cash/bank balances.',
      },
      {
        title: 'Multi-Tenant Architecture & RBAC',
        desc: 'Fully isolated data per tenant business, with three-tier role-based access control (super_admin, admin, user), JWT-based auth, and activity logging for login/logout events.',
      },
    ],
  },
]

type Project = (typeof projects)[0]

export default function Portfolio() {
  useScrollFade()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <TooltipProvider delayDuration={200}>
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
              style={{
                color: 'var(--primary)',
                fontFamily: 'Sora, sans-serif',
              }}
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
                  {/* Title + Icons — flex justify-between items-center */}
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

                    <div className="flex items-center gap-3">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                          >
                            <FileText size={18} strokeWidth={2} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Documentation</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                          >
                            <ExternalLink size={18} strokeWidth={2} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Site</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* View Project Details — text-right + text-blue */}
                  <div className="text-right">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group"
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

              {/* Documentation + Live icons */}
              <div className="flex items-center gap-4 mb-5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={selectedProject.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <FileText size={18} strokeWidth={2} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Documentation</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <ExternalLink size={18} strokeWidth={2} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Site</p>
                  </TooltipContent>
                </Tooltip>
              </div>

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
    </TooltipProvider>
  )
}
