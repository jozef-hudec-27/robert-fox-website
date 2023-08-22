import Link from 'next/link'
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

function Footer({ showFreelance }: { showFreelance?: boolean }) {
  return (
    <footer
      className={`flex flex-col items-center mt-[256px] ${showFreelance && 'border-t'} border-black-10 border-solid`}
    >
      {showFreelance && (
        <div className="p-[24px] flex flex-col gap-[72px] sm:gap-[96px] w-full sm:w-3/4">
          <div className="flex flex-col">
            <h3 className="font-light">I'm currently available for freelance work.</h3>
            <p>If you're looking for a designer and developer that likes to get stuff done, let's talk.</p>
          </div>

          <Link href="/about" className="sm:block hidden btn primary w-fit">
            Got a project in mind? Let's talk!
          </Link>

          <Link href="/about" className="sm:hidden btn primary w-fit">
            Let's talk!
          </Link>
        </div>
      )}

      <div className="p-[48px] flex items-center 2xl:justify-between flex-col 2xl:flex-row border-t border-black-10 border-solid w-full">
        <div className="flex items-center gap-[32px] 2xl:gap-[64px] flex-col 2xl:flex-row">
          <p>(c) Copyright Robert Fox {new Date().getFullYear()}. All rights reserved.</p>

          <div className="flex items-center gap-[32px] 2xl:gap-[48px]">
            <Link href="/" className="font-josefinSans text-black-100 text-sm">
              Privacy Policy
            </Link>

            <Link href="/" className="font-josefinSans text-black-100 text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-[32px] 2xl:gap-[64px] flex-col 2xl:flex-row">
          <div className="flex items-center gap-[48px]">
            <Link href="mailto:hello@robertfox.design" className="text-primary font-bold text-sm">
              hello@robertfox.design
            </Link>

            <p className="text-black-100 text-sm font-bold">(704) 555-0127</p>
          </div>

          <div className="h-[20px] w-[2px] bg-secondary hidden 2xl:block"></div>

          <div className="flex items-center gap-[48px]">
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
