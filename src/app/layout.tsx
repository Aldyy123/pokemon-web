"use client"

import Navbar from '@/infra/ui/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/layouts/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>List Pokemon</title>
      </head>

      <body className={inter.className}>
        <Navbar />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
