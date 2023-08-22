function TestimonialDecoration({ size, position, bgColor }: { size: 8 | 16 | 20; position: string, bgColor: string }) {
  const sizeMap = {
    8: 'w-[8px] h-[8px]',
    16: 'w-[16px] h-[16px]',
    20: 'w-[20px] h-[20px]',
  }

  return (
    <div
      className={`absolute z-0 ${position} ${bgColor} ${
        sizeMap[size]
      } rounded-full opacity-[60%] sm:opacity-100`}
      aria-hidden
    ></div>
  )
}

export default TestimonialDecoration
