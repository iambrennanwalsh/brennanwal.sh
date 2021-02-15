import {useContext, useEffect, useState} from 'react'
import {Icon, Image} from '@/components'
import {ComponentsContext} from '@/contexts'
import {StyledNav, StyledNavLogo, StyledNavBurger, StyledNavMenu, StyledNavLink} from './Nav.styles'
import {useRouter} from 'next/router'

export const Nav: App.NavComponent = function ({className, styles, children}) {
	const router = useRouter()
	const [menuState, setMenuState] = useState<boolean>(false)

	useEffect(() => {
		setMenuState(false)
		window.scrollTo(0, 0)
	}, [router.asPath])

	return (
		<ComponentsContext.Provider value={{active: menuState}}>
			<StyledNav {...(styles && {css: styles})} {...(className && {className: className})}>
				<div>
					{children}
					<StyledNavBurger onClick={() => setMenuState(!menuState)}>
						<Icon type="bars" />
					</StyledNavBurger>
				</div>
			</StyledNav>
		</ComponentsContext.Provider>
	)
}

const NavLogo: App.NavLogoComponent = props => {
	return (
		<StyledNavLogo href="/">
			<Image {...props} />
		</StyledNavLogo>
	)
}

const NavMenu: App.NavMenuComponent = props => {
	const context = useContext(ComponentsContext)
	return <StyledNavMenu {...props} active={context?.active as boolean} />
}

const NavLink: App.NavLinkComponent = props => {
	return <StyledNavLink {...props} activeClassName="active" />
}

Nav.Logo = NavLogo
Nav.Menu = NavMenu
Nav.Link = NavLink
