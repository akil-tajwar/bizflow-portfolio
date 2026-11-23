import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import '.././globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bizflow.dev'),
  title: 'BizFlow | ERPNext Developer in Bangladesh | ERP, BI & AI',
  description:
    'BizFlow, Chattogram-based ERPNext developers in Bangladesh. We deliver ERPNext implementation, Tableau dashboards, AI automation and custom apps.',
  alternates: {
    canonical: '/',
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <div className="bg-white rounded">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  )
}




// import { Toaster } from '@/components/ui/toaster'
// import '.././globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function HomeLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="">
//           <div className="bg-white rounded">{children}</div>
//           <Toaster />
//         </div>
//       </body>
//     </html>
//   )
// }
