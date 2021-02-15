// Text Test (client/src/components/text/Text.test)

import React from 'react'
import {render} from '@testing-library/react'
import {Text} from '.'

describe('Text', () => {
	it('renders a p element by default.', () => {
		const {container} = render(<Text />)
		expect(container.firstChild?.nodeName).toBe('P')
	})

	it('renders the element passed to props.element.', () => {
		const {container} = render(<Text element="span" />)
		expect(container.firstChild?.nodeName).toBe('SPAN')
	})
})
