import Link from 'next/link'

function NavLinksModalItem({
  isLink,
  path,
  text,
  icon,
  appendDivider,
}: {
  isLink: boolean
  path: string | undefined
  text: string
  icon: React.ReactNode
  appendDivider: boolean | undefined
}) {
  const content = (
    <span className="flex items-center gap-[12px] text-secondary">
      {icon}
      <span className="text-black-75">{text}</span>
    </span>
  )

  return (
    <div>
      {isLink ? (
        <Link
          href={path || ''}
          className='py-[6px] sm:py-[4px] px-[16px] block w-full h-full hover:bg-black-5 focus:bg-black-5 active:bg-black-10'
          aria-label={text}
        >
          {content}
        </Link>
      ) : (
        <div className='py-[4px] px-[16px] w-full h-full' aria-label={text}>{content}</div>
      )}

      {appendDivider && <div className="border-b border-black-10 w-full my-[6px]" />}
    </div>
  )
}

export default NavLinksModalItem
