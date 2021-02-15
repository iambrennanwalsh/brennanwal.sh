import {Nav, LoadBar} from '@/components'
import {NavMenu} from '@/Params'

export const Header: App.Component = function () {
	return (
		<>
			<LoadBar />
			<header id="header">
				<Nav>
					<Nav.Logo src="/images/interface/logo.png" />
					<Nav.Menu>
						{NavMenu.map(link => (
							<Nav.Link href={link.href} key={link.name}>
								{link.name}
							</Nav.Link>
						))}
					</Nav.Menu>
				</Nav>
			</header>
		</>
	)
}
