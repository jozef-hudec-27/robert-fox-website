import Link from 'next/link'
import { BsEnvelope, BsTelephone, BsArrowUpRight } from 'react-icons/bs'
import Accordion from '../components/accordion/Accordion'
import { faq } from './info'

export const metadata = {
  title: 'Contact',
  description:
    'I’m currently available for freelance work. If you’re looking for a designer and developer that likes to get stuff done, let’s talk.',
}

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
            <BsEnvelope className="text-lg sm:text-xl" fill="url(#svg-gradient)" aria-hidden />
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

      <section id="faq" className="section mid-section w-full bg-black-5 py-[48px] sm:py-[64px]">
        <div className="flex flex-col gap-[24px] sm:gap-[32px] mx-auto w-11/12 lg:w-3/4">
          <h3 className="font-light w-full md:w-2/3 xl:w-1/2">
            Before sending me a message, here are some things you should know:
          </h3>

          <div className="w-full md:w-2/3 xl:w-1/2">
            <Accordion accordionItems={faq} />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section mid-section flex items-center justify-between gap-[32px] sm:gap-[64px] flex-col xl:flex-row w-11/12 lg:w-3/4"
      >
        <div className="flex flex-col gap-[8px] sm:gap-[16px] flex-1">
          <h2>Got a project in mind?</h2>
          <p>Use the form to give me as much detail as possible and I'll get back to you as soon as I can</p>
        </div>

        <form action="/" className="flex flex-col gap-[16px] sm:gap-[32px] flex-1 w-full xl:w-auto">
          <div className="flex gap-[16px] sm:gap-[8px] flex-col sm:flex-row">
            <input type="text" className="input primary flex-1" placeholder="Name" aria-label="Name" required />
            <input
              type="email"
              className="input primary flex-1"
              placeholder="Email address"
              aria-label="Email"
              required
            />
          </div>

          <textarea
            className="input primary min-h-[220px]"
            placeholder="Project details"
            aria-label="Project details"
            required
          ></textarea>
          <input type="text" className="input primary" placeholder="Budget range" aria-label="Budget range" required />
          <input type="text" className="input primary" placeholder="Timeline" aria-label="Timeline" required />
          <button className="btn primary">
            <span>Send message</span>
            <BsArrowUpRight aria-hidden />
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
