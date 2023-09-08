import '../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
const roboto = Roboto({subsets: ['latin'], weight: '300'});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by NEXT.JS',
  icons: {
     icon: '/skull.ico'
  },
  manifest: '/site.webmanifiest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}