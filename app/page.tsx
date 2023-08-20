import { BsChevronDoubleDown } from 'react-icons/bs'

function IndexPage() {
  return (
    <div>
      <section id="hero" className="flex flex-col items-center gap-[32px] w-3/4 mx-auto mt-[48px]">
        <h3 className="font-light">Hey there, I'm Robert</h3>

        <h1 className="gradient-text gradient-50 text-center">Freelance UI Designer & Web Developer</h1>

        <p className="w-1/2 text-center">
          I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that
          likes to get stuff done, let’s talk.
        </p>

        <button className="btn primary mt-[64px]">
          <span>See my work</span>
          <BsChevronDoubleDown />
        </button>
      </section>

      <div id="el" className="m-12 p-12 rounded-full"></div>
    </div>
  )
}

export default IndexPage
