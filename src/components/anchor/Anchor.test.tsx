// Anchor Test (client/src/components/anchor)

import {getByTestId, render} from '@testing-library/react'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Anchor} from '.'

describe('Anchor', () => {
	it('renders an external link when props.href is an absolute url.', () => {
		const {container} = render(
			<Anchor href="https://www.google.com">Google</Anchor>
		)
		expect(getByTestId(container as HTMLElement, 'external')).toBeDefined()
	})

	it('renders a Link (react-router-dom) when props.href is a relative url.', () => {
		const {container} = render(<Anchor href="/">Home</Anchor>, {
			wrapper: BrowserRouter
		})
		expect(getByTestId(container as HTMLElement, 'internal')).toBeDefined()
	})

	it('renders a NavLink (react-router-dom) when props.href is a relative url and props.activeClassName is defined.', () => {
		const {container} = render(
			<Anchor href="/" styles={{color: 'red'}} activeClassName="test">
				Home
			</Anchor>,
			{wrapper: BrowserRouter}
		)
		expect(getByTestId(container as HTMLElement, 'nav')).toBeDefined()
	})
})
