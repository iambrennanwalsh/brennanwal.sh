import type {Component, Props} from '@/'
import type {ReactNode} from 'react'
import {useState} from 'react'
import {StyledTab, StyledTabs, StyledTabsContainer} from '.'

interface TabsOwnProps {
  tabs: {
    title: string
    children: ReactNode
  }[]
}

export type TabsProps = Props<typeof StyledTabs, TabsOwnProps>

export const Tabs: Component<TabsProps> = ({tabs, ...props}) => {
  const [active, setActive] = useState({
    title: tabs[0].title,
    children: tabs[0].children,
  })

  return (
    <StyledTabs>
      <StyledTabsContainer {...props}>
        {tabs.map(({title, children}) => (
          <StyledTab
            key={title}
            active={active.title == title}
            onClick={() => setActive({title: title, children: children})}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabsContainer>
      <div>{active.children}</div>
    </StyledTabs>
  )
}
