'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import TestimonialDecoration from './TestimonialDecoration'
import NewTestimonialBtn from './NewTestimonialBtn'

interface Testimonial {
  author_image: any
  author_name: string
  author_location: string
  text: string
}

function Testimonials({ testimonials, heading }: { testimonials: Testimonial[]; heading?: string }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div
      className={`flex flex-col items-center gap-[24px] md:gap-[36px] lg:gap-[48px] py-[36px] lg:py-[48px] ${
        testimonials.length > 1 && ' bg-black-5 shadow-xl'
      }  rounded-[24px] relative`}
    >
      {heading && (
        <h4 className="relative">
          <span className="relative z-10">{heading}</span>
          <div
            className="absolute bottom-[2px] md:bottom-[4px] lg:bottom-[8px] h-[8px] md:h-[12px] lg:h-[16px] w-full bg-[#F9DF96] z-0"
            aria-hidden
          ></div>
        </h4>
      )}

      <Image
        src={testimonials[currentTestimonial].author_image}
        alt={`Testimonial ${currentTestimonial + 1} author`}
        className="w-[96px] h-[96px] rounded-full drop-shadow-xl"
      />

      <div className="flex flex-col items-center relative z-10">
        <p className="font-josefinSans font-bold">{testimonials[currentTestimonial].author_name}</p>
        <p>{testimonials[currentTestimonial].author_location}</p>
      </div>

      <div className="flex gap-[12px] relative z-10" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => {
          return <AiFillStar key={i} className="text-yellow text-lg sm:text-xl" />
        })}
      </div>

      <p className="font-josefinSans font-bold text-base sm:text-lg w-3/4 lg:w-1/2 text-center relative">
        <FaQuoteLeft
          className="text-black-10 text-lg sm:text-xl absolute -left-[8px] -top-[32px] sm:-top-[48px] z-10"
          aria-hidden
        />
        <FaQuoteRight
          className="text-black-10 text-lg sm:text-xl absolute right-0 top-[24px] sm:top-[32px] z-10"
          aria-hidden
        />
        <span className="relative text-black-100 z-10">{testimonials[currentTestimonial].text}</span>
        {testimonials.length > 1 && (
          <>
            <NewTestimonialBtn
              direction="left"
              changeTestimonial={setCurrentTestimonial}
              testimonialCount={testimonials.length}
            />
            <NewTestimonialBtn
              direction="right"
              changeTestimonial={setCurrentTestimonial}
              testimonialCount={testimonials.length}
            />
          </>
        )}
      </p>

      <TestimonialDecoration size={20} position="top-[25%] left-[10%]" bgColor="bg-secondary" />
      <TestimonialDecoration size={16} position="top-[40%] left-[25%]" bgColor="bg-primary" />
      <TestimonialDecoration size={16} position="top-[33%] right-[15%]" bgColor="bg-error" />
      <TestimonialDecoration size={16} position="bottom-[20%] right-[13%]" bgColor="bg-yellow" />
      <TestimonialDecoration size={8} position="bottom-[15%] left-[17%]" bgColor="bg-primary" />
    </div>
  )
}

export default Testimonials
