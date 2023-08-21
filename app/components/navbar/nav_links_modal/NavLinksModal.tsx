import Modal from 'react-modal'
import { AiOutlineMail, AiOutlinePhone, AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import NavLinksModalItem from './NavLinksModalItem'

function NavLinksModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  Modal.setAppElement('#root')

  interface NavLink {
    isLink: boolean
    path?: string
    text: string
    icon?: React.ReactNode
    appendDivider?: boolean
  }

  const navLinks: NavLink[] = [
    { isLink: true, path: '/', text: 'About Me', icon: null },
    { isLink: true, path: '/', text: 'Contact', icon: null, appendDivider: true },
    { isLink: true, path: '/', text: 'Instagram', icon: <AiOutlineInstagram /> },
    { isLink: true, path: '/', text: 'Twitter', icon: <FiTwitter /> },
    { isLink: true, path: '/', text: 'Dribbble', icon: <AiOutlineDribbble />, appendDivider: true },
    { isLink: true, path: 'mailto:hello@robertfox.design', text: 'hello@robertfox.design', icon: <AiOutlineMail /> },
    { isLink: false, path: '704-555-0127', text: '(704) 555-0127', icon: <AiOutlinePhone /> },
  ]

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={() => {
        document.body?.style.setProperty('overflow', 'hidden')
      }}
      onAfterClose={() => {
        document.body?.style.setProperty('overflow', 'auto')
      }}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Navigation links"
      className="border border-black-10 w-11/12 md:w-2/3 lg:w-1/2 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-[32px] bg-white drop-shadow-xl sm:drop-shadow-2xl rounded-[16px]"
    >
      <div className="flex flex-col">
        {navLinks.map((navLink, index) => {
          const { isLink, path, text, icon, appendDivider } = navLink

          return (
            <NavLinksModalItem
              key={index}
              isLink={isLink}
              path={path}
              text={text}
              icon={icon}
              appendDivider={appendDivider}
            />
          )
        })}
      </div>
    </Modal>
  )
}

export default NavLinksModal
