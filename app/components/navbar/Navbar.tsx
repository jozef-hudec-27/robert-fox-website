import Image from 'next/image'
import logo from '../../../public/assets/images/Logo.svg'
import Link from 'next/link'
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="p-[48px] flex items-center justify-between border-b border-black-10 border-solid">
      <div className="flex items-center gap-[64px]">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>

        <Link href="/about" className="font-josefinSans text-black-100 text-sm">
          About Me
        </Link>

        <Link href="contact" className="font-josefinSans text-black-100 text-sm">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-[64px]">
        <Link href="mailto:hello@robertfox.design" className="text-primary font-bold text-sm">
          hello@robertfox.design
        </Link>

        <p className="text-black-100 text-sm font-bold">(704) 555-0127</p>

        <div className="h-[20px] w-[2px] bg-secondary"></div>

        <Link href="https://www.instagram.com" aria-label="Instagram">
          <AiOutlineInstagram className="text-black-100 text-lg" aria-hidden />
        </Link>

        <Link href="https://www.twitter.com" aria-label="Twitter">
          <FiTwitter className="text-black-100 text-lg" aria-hidden />
        </Link>

        <Link href="https://www.dribbble.com" aria-label="Dribbble">
          <AiOutlineDribbble className="text-black-100 text-lg" aria-hidden />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
