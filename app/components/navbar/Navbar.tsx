'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/Logo.svg'
import Link from 'next/link'
import { AiOutlineDribbble, AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import NavLinksModal from './nav_links_modal/NavLinksModal'

function Navbar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className="p-[48px] flex items-center justify-between border-b border-black-10 border-solid">
      <div className="flex items-center gap-[64px]">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>

        <Link href="/about" className="hidden sm:block font-josefinSans text-black-100 text-sm">
          About Me
        </Link>

        <Link href="contact" className="hidden sm:block font-josefinSans text-black-100 text-sm">
          Contact
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-[64px]">
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

      <div className="lg:hidden">
        <button onClick={() => setShowModal((prev) => !prev)} aria-label='Show navigation links'>
          <AiOutlineMenu className="text-black-100" />
        </button>

        <NavLinksModal isOpen={showModal} setIsOpen={setShowModal} />
      </div>
    </nav>
  )
}

export default Navbar
