import Image from 'next/image'
import photo1 from '../../public/assets/images/robert/robert_fox1.jpg'
import photo2 from '../../public/assets/images/robert/robert_fox2.jpg'
import photo3 from '../../public/assets/images/robert/robert_fox3.jpg'

function AboutPage() {
  return (
    <div>
      <section id="about" className="w-11/12 lg:w-3/4 mx-auto mt-[48px]">
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
    </div>
  )
}

export default AboutPage
