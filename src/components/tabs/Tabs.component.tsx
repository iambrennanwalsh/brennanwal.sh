import React, {useState, useContext, useEffect} from 'react'
import {ComponentsContext as TabsContext} from '@/contexts'
import {StyledTabs, StyledTabsTab} from '.'

export const Tabs: App.TabsComponent = ({className, styles, children}) => {
	const [active, setActive] = useState<{
		title?: string
		children?: React.ReactNode
	}>({
		title: undefined,
		children: undefined
	})

	return (
		<TabsContext.Provider value={{active: active, setActive: setActive}}>
			<StyledTabs {...(styles && {css: styles})} {...(className && {className: className})}>
				{children}
			</StyledTabs>
			<div className="tab">{active?.children && active.children}</div>
		</TabsContext.Provider>
	)
}

export const Tab: App.TabsTabComponent = function ({
	title,
	initial = false,
	className,
	styles,
	children
}) {
	const {active, setActive} = useContext(TabsContext)!

	useEffect(() => {
		if (initial) {
			setActive({title: title, children: children})
		}
	}, [])

	return (
		<StyledTabsTab
			{...(styles && {css: styles})}
			className={`${title == active.title ? 'active' : ''} ${className && {className: className}}`}
			onClick={() => setActive({title: title, children: children})}>
			{title}
		</StyledTabsTab>
	)
}

Tabs.Tab = Tab
