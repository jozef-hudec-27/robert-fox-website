'use client'

import { BsChevronDoubleDown } from "react-icons/bs"

function SeeMyWorkBtn() {
  return (
    <button
      className="btn primary w-full sm:w-fit mt-[32px] md:mt-[48px] lg:mt-[64px]"
      onClick={() => {
        document.getElementById('my-work')?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <span>See my work</span>
      <BsChevronDoubleDown aria-hidden />
    </button>
  )
}

export default SeeMyWorkBtn
