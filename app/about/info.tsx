import Image from "next/image"
import { Skill, Tab, Testimonial } from "../interfaces"
import Tool from "../components/tool/Tool"
import { BsCart, BsPhone, BsUniversalAccess } from "react-icons/bs"
import testimonialAuthor1 from '../../public/assets/images/testimonials/testimonial_author_1.png'
import testimonialAuthor2 from '../../public/assets/images/testimonials/testimonial_author_2.png'
import sketch from '../../public/assets/images/tools/sketch.svg'
import figma from '../../public/assets/images/tools/figma.svg'
import xd from '../../public/assets/images/tools/xd.svg'
import photoshop from '../../public/assets/images/tools/photoshop.svg'
import illustrator from '../../public/assets/images/tools/illustrator.svg'
import vscode from '../../public/assets/images/tools/vscode.svg'
import github from '../../public/assets/images/tools/github.svg'
import chatgpt from '../../public/assets/images/tools/chatgpt.svg'

export const testimonials: Testimonial[] = [
  {
    author_image: testimonialAuthor1,
    author_name: 'James Wittings',
    author_location: 'Sydney, Australia',
    text: 'Working with Robert has been an absolute pleasure and we’ll definitely turn to his expertise for new projects.',
  },
  {
    author_image: testimonialAuthor2,
    author_name: 'Sandra Marks',
    author_location: 'Berlin, Germany',
    text: 'Robert is great. We worked together really well and we’ll definitely contract his services in the future.',
  },
]

export const skills: Skill[] = [
  {
    title: 'I can design and build a responsive and accessible  website',
    description:
      'My goal is to build accessible and responsive user interfaces for the web and mobile, while preserving the best practices for proper user experience. ',
    icon: <BsUniversalAccess />,
  },
  {
    title: 'I can design and build an eCommerce store',
    description:
      'I have extensive knowledge of development on the front-end and back-end so I’m able to deliver a completely functional eCommerce website.',
    icon: <BsCart />,
  },
  {
    title: 'I can design and build a mobile app for iOS and Android',
    description:
      'I recently started designing and coding mobile apps and I love it. It’s a different process compared to traditional website design but I’ve been successful in all projects so far.',
    icon: <BsPhone />,
  },
]

export const tools: Tab[] = [
  {
    title: 'Tools I use for Design',
    body: (
      <div className="flex gap-[24px] sm:gap-[32px] justify-center flex-wrap mt-[48px] sm:mt-[64px]">
        <Tool name="Sketch" icon={<Image src={sketch} alt="Sketch" height={48} />} />
        <Tool name="Figma" icon={<Image src={figma} alt="Figma" height={48} />} />
        <Tool name="Adobe XD" icon={<Image src={xd} alt="Adobe XD" height={48} />} />
        <Tool name="Adobe Photoshop" icon={<Image src={photoshop} alt="Adobe Photoshop" height={48} />} />
        <Tool name="Adobe Illustrator" icon={<Image src={illustrator} alt="Adobe Illustrator" height={48} />} />
      </div>
    ),
  },
  {
    title: 'Tools I use for Development',
    body: (
      <div className="flex gap-[24px] sm:gap-[32px] justify-center flex-wrap mt-[48px] sm:mt-[64px]">
        <Tool name="VS Code" icon={<Image src={vscode} alt="Visual Studio Code" height={48} />} />
        <Tool name="Github" icon={<Image src={github} alt="Github" height={48} />} />
        <Tool name="ChatGPT" icon={<Image src={chatgpt} alt="ChatGPT" height={48} />} />
      </div>
    ),
  },
]
