import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Lato, Josefin_Sans } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: '400' })
const josefinSans = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin-sans' })

export const metadata = {
  title: {
    default: 'Robert Fox',
    template: '%s | Robert Fox',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.variable} ${josefinSans.variable}`}>
      <body>
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>

        {/* Used for filling svg's with gradient */}
        <svg className="w-0 h-0 absolute" focusable="false" aria-hidden>
          <linearGradient id="svg-gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6840" />
            <stop offset="100%" stopColor="#FF4C80" />
          </linearGradient>
        </svg>
      </body>
    </html>
  )
}
