// Heading Test (client/src/components/heading/Heading.test)

import React from 'react'
import {render} from '@testing-library/react'
import {Heading} from '.'

describe('Heading', () => {
	it('renders a h1 element by default.', () => {
		const {container} = render(<Heading />)
		expect(container.firstChild?.nodeName).toBe('H1')
	})

	it('renders the heading element passed to props.level.', () => {
		const {container} = render(<Heading level={4} />)
		expect(container.firstChild?.nodeName).toBe('H4')
	})
})
