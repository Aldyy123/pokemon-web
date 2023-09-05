"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/layouts/ReactQueryProvider'
import Navbar from '@/ui/components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
