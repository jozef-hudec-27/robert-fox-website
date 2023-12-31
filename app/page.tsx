import Image from 'next/image'
import { BsMicrosoft } from 'react-icons/bs'
import { AiOutlineAmazon, AiFillApple, AiOutlineGithub } from 'react-icons/ai'
import { BiLogoAdobe } from 'react-icons/bi'
import landingPage1 from '../public/assets/images/my_work/landing_page_1.png'
import landingPage2 from '../public/assets/images/my_work/landing_page_2.png'
import landingPage3 from '../public/assets/images/my_work/landing_page_3.png'
import Testimonials from './components/testimonials/Testimonials'
import testimonialAuthor1 from '../public/assets/images/testimonials/testimonial_author_1.png'
import { Testimonial } from './interfaces'
import SeeMyWorkBtn from './components/SeeMyWorkBtn'

export const metadata = {
  title: {
    absolute: 'Robert Fox | Freelance UI Designer & Web Developer',
  },
  description:
    'I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that likes to get stuff done, let’s talk.',
}

function IndexPage() {
  const testimonials: Testimonial[] = [
    {
      author_image: testimonialAuthor1,
      author_name: 'James Wittings',
      author_location: 'Sydney, Australia',
      text: 'Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.',
    },
  ]

  return (
    <div>
      <section
        id="hero"
        className="section top-section flex flex-col items-center gap-[12px] md:gap-[24px] lg:gap-[32px] w-11/12 lg:w-3/4"
      >
        <h3 className="font-light">Hey there, I'm Robert</h3>

        <h1 className="gradient-text text-center">Freelance UI Designer & Web Developer</h1>

        <p className="w-full lg:w-1/2 text-center">
          I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that
          likes to get stuff done, let’s talk.
        </p>

        <SeeMyWorkBtn />
      </section>

      <section
        id="my-work"
        className="section mid-section flex flex-col items-center gap-[36px] md:gap-[64px] lg:gap-[84px] w-full lg:w-3/4"
      >
        <div className="flex flex-col items-center gap-[12px] md:gap-[24px] lg:gap-[32px]">
          <h2>My Work</h2>
          <p className="text-center w-3/4">
            I specialize in website design and development, but I’ve also designed successful iOS and Android apps.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[36px] md:[gap-64px] lg:gap-[72px] w-11/12 md:w-4/5 xl:w-3/4">
          <Image src={landingPage1} alt="Landing page 1" className="w-3/4 rounded-[24px] shadow-xl md:shadow-2xl" />
          <Image src={landingPage2} alt="Landing page 2" className="w-3/4 rounded-[24px] shadow-xl md:shadow-2xl" />

          <Testimonials testimonials={testimonials} />

          <Image src={landingPage3} alt="Landing page 3" className="w-3/4 rounded-[24px] shadow-xl md:shadow-2xl" />
        </div>
      </section>

      <section id="experience" className="mid-section w-full bg-primary p-[48px] sm:p-[64px]">
        <div className="flex flex-col items-center gap-[32px]">
          <h3 className="text-white font-light text-center">
            I had the pleasure of working with these awesome companies
          </h3>

          <div className="flex items-center justify-center flex-wrap gap-[32px] md:gap-[48px] lg:gap-[64px] text-white text-xl sm:text-2xl">
            <AiOutlineAmazon />
            <BiLogoAdobe />
            <AiFillApple />
            <AiOutlineGithub />
            <BsMicrosoft />
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
