import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function NewTestimonialBtn({
  direction,
  changeTestimonial,
  testimonialCount,
}: {
  direction: 'left' | 'right'
  changeTestimonial: (fn: (prev: number) => number) => void
  testimonialCount: number
}) {
  const arrowIcon =
    direction === 'left' ? <BsArrowLeft className="relative z-10" /> : <BsArrowRight className="relative z-10" />

  const xPosition = direction === 'right' ? '-right-[48px] md:-right-[64px]' : '-left-[48px] md:-left-[64px]'

  return (
    <button
      className={`text-black-50 hover:text-black-75 focus:text-black-75 text-lg sm:text-xl absolute ${xPosition} -top-[48px] group`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
      onClick={() =>
        changeTestimonial((prev) =>
          direction === 'left' ? Math.abs(prev - 1) % testimonialCount : (prev + 1) % testimonialCount
        )
      }
    >
      {arrowIcon}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          direction === 'left' ? 'left-0' : 'right-0'
        } w-[20px] sm:w-[28px] h-[20px] sm:h-[28px] bg-[#f9df96] rounded-full z-0 group-hover:bg-yellow group-focus:bg-yellow`}
      ></div>
    </button>
  )
}

export default NewTestimonialBtn
