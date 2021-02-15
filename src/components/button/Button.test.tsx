// Button Test (client/src/components/button)

import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {Button} from '.'
import 'regenerator-runtime/runtime.js'

describe('Button', () => {
	it('runs a callback passed to props.handle when clicked.', async () => {
		const result = () => {
			return new Promise(done => {
				const {getByText} = render(
					<Button handle={() => done(true)}>Test Me</Button>
				)
				const node = getByText('Test Me')
				fireEvent.click(node)
			})
		}
		const val = await result()
		expect(val).toBe(true)
	})
})
