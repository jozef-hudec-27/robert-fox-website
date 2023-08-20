import './globals.css'
import { Lato, Josefin_Sans } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: '400' })
const josefinSans = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin-sans' })

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
