import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GMU Conference',
  description: 'GMU Conference',
  generator: 'Aman Shah',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
