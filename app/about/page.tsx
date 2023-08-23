import Image from 'next/image'
import photo1 from '../../public/assets/images/robert/robert_fox1.jpg'
import photo2 from '../../public/assets/images/robert/robert_fox2.jpg'
import photo3 from '../../public/assets/images/robert/robert_fox3.jpg'
import { BsAlarm, BsTrophy } from 'react-icons/bs'
import Testimonials from '../components/testimonials/Testimonials'
import SkillCard from '../components/skill/SkillCard'
import Tabs from '../components/tabs/Tabs'
import { testimonials, skills, tools } from './info'

function AboutPage() {
  return (
    <div>
      <section id="about" className="section top-section w-11/12 lg:w-3/4">
        <div className="flex flex-col gap-[24px] sm:gap-[32px] w-full md:w-2/3 lg:w-1/2">
          <h2>I'm Robert Fox.</h2>
          <p>
            I was born in Henderson, Nevada almost three decades ago. From an early age I showed interest for computers
            and that grew into a passion during high school.
          </p>

          <p>
            I got into web design and development in college. Attending the Carnegie Mellon University in Pittsburgh was
            the best decision I ever made because it showed me what I wanted to do for the rest of my life.
          </p>

          <p>Currently I help businesses all around the world by designing and coding websites and mobile apps.</p>

          <p>I had the pleasure of working with big companies like Apple, Microsoft and Amazon, just to name a few.</p>

          <p>Right now I’m based in New York.</p>
        </div>

        <div className="relative mt-[64px]">
          <Image
            src={photo1}
            alt="Robert Fox 1"
            className="aspect-square w-[256px] md:w-[384px] 2xl:w-[512px] rounded-[1px] shadow-xl mx-auto 2xl:mx-0"
          />
          <Image
            src={photo2}
            alt="Robert Fox 2"
            className="aspect-square w-[256px] md:w-[384px] 2xl:w-[512px] rounded-[1px] shadow-xl 2xl:absolute top-[192px] left-1/2 2xl:-translate-x-1/2 mt-[32px] 2xl:mt-0 mx-auto 2xl:mx-0"
          />
          <Image
            src={photo3}
            alt="Robert Fox 3"
            className="aspect-square w-[256px] md:w-[384px] 2xl:w-[512px] rounded-[1px] shadow-xl 2xl:absolute top-[96px] right-0 mt-[32px] 2xl:mt-0 mx-auto 2xl:mx-0"
          />
        </div>
      </section>

      <div className="mid-section 2xl:mt-[448px] border-t border-b border-black-10">
        <section id="promo" className="section w-11/12 lg:w-3/4 py-[36px]">
          <div className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px] w-full md:w-3/4 lg:w-1/2">
            <h3 className="font-light">Regardless of project size, you will always get:</h3>

            <div className="flex flex-col gap-[8px] sm:gap-[12px]">
              <h4 className="gradient-text">1. On-time delivery</h4>
              <p className="relative">
                <span>
                  I know time is money so I don’t want to waste yours. Or mine. So I guarantee that I will always
                  deliver what you pay for as promised.
                </span>

                <BsAlarm
                  className="hidden md:block absolute -right-[64px] top-1/2 -translate-y-1/2 text-black-25 sm:text-2xl rotate-[16deg]"
                  aria-hidden
                />
              </p>
            </div>

            <div className="flex flex-col gap-[8px] sm:gap-[12px]">
              <h4 className="gradient-text">2. Quality</h4>
              <p className="relative">
                <span>
                  I don’t want to put my name on something subpar so my first concern is always quality. No matter what,
                  you will love the end result.
                </span>

                <BsTrophy
                  className="hidden md:block absolute -right-[64px] top-1/2 -translate-y-1/2 text-black-25 sm:text-2xl -rotate-[12deg]"
                  aria-hidden
                />
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="section mid-section w-11/12 md:w-4/5 lg:w-3/4">
        <Testimonials testimonials={testimonials} heading="What My Clients Say" />
      </section>

      <section
        id="skills"
        className="section mid-section flex justify-between flex-wrap gap-[64px] md:gap-[96px] lg:gap-[128px] w-11/12 sm:w-10/12"
      >
        {skills.map((skill, index) => {
          return <SkillCard key={index} skill={skill} />
        })}
      </section>

      <section id="tools" className="section mid-section w-11/12 lg:w-3/4">
        <Tabs tabs={tools} />
      </section>
    </div>
  )
}

export default AboutPage
