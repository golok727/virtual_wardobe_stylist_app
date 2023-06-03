import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Virtual Wardobe Stylist',
  description: 'Home page of virtual wardobe app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}