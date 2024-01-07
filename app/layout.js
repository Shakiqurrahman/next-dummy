import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Introducing Next JS',
  description: 'Discovered By Shakiqur - Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
