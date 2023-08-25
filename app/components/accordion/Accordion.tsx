'use client'

import { useState } from 'react'
import {
  Accordion as A,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { AccordionItem as AccordionItemInterface } from '@/app/interfaces'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Accordion({ accordionItems }: { accordionItems: AccordionItemInterface[] }) {
  const [selected, setSelected] = useState(-1)

  return (
    <A
      className="bg-white p-[24px] border border-black-10 rounded-[16px] shadow-xl"
      onChange={(current) => {
        setSelected(Number(current[0]))
      }}
    >
      {accordionItems.map((item, index) => {
        return (
          <AccordionItem key={index} uuid={index}>
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-[2px] px-[4px] py-[8px] text-black-75 hover:text-black-100 focus:text-black-100 text-[18px] sm:text-base">
                <span className="w-fit">{item.title}</span>{' '}
                <BsChevronDown className={`${selected === index && 'hidden'} min-w-[18px]`} aria-hidden />
                <BsChevronUp className={`${selected !== index && 'hidden'} min-w-[18px]`} aria-hidden />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-sm sm:text-[18px] pl-[5px]">{item.body}</p>
            </AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </A>
  )
}

export default Accordion
