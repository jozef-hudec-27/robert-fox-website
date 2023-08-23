'use client'

import { Tab, Tabs as T, TabList, TabPanel } from 'react-tabs'
import { Tab as TabInterface } from '@/app/interfaces'
import 'react-tabs/style/react-tabs.css'

function Tabs({ tabs }: { tabs: TabInterface[] }) {
  return (
    <T>
      <TabList className="flex justify-center items-start">
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              tabIndex="0"
              className="font-josefinSans text-black-25 cursor-pointer border-b-[4px] border-black-25 px-[16px]"
              selectedClassName="text-primary font-bold border-b-[6px] border-primary"
            >
              {tab.title}
            </Tab>
          )
        })}
      </TabList>

      {tabs.map((tab, index) => {
        return <TabPanel key={index}>{tab.body}</TabPanel>
      })}
    </T>
  )
}

export default Tabs
