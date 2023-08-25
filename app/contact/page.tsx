import Link from 'next/link'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'

function ContactPage() {
  return (
    <div>
      <section id="hero" className="section top-section flex flex-col gap-[64px] w-11/12 lg:w-3/4">
        <div className="flex flex-col">
          <h3>I’m currently available for freelance work.</h3>
          <p className="w-full md:w-2/3 lg:w-1/2">
            If you’re looking for a designer and developer that likes to get stuff done, let’s talk.
          </p>
        </div>

        <div className="flex flex-col gap-[24px] 2xl:ml-[128px]">
          <div className="flex items-center justify-between w-11/12 md:w-2/3 lg:w-3/5 2xl:w-1/4">
            <BsEnvelope className="text-lg sm:text-xl" fill="url(#svg-gradient)" aria-hidden  />
            <Link href="mailto:hello@robertfox.design">
              <h6 className="font-light">hello@robertfox.design</h6>
            </Link>
          </div>
          <div className="flex items-center justify-between w-11/12 md:w-2/3 lg:w-3/5 2xl:w-1/4">
            <BsTelephone className="text-lg sm:text-xl" fill="url(#svg-gradient)" aria-hidden />
            <h6 className="font-light">(704) 555-0127</h6>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
