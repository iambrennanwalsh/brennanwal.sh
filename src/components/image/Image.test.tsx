// Image Test (client/src/components/image/Image.test)

import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Image} from '.'

const mockDispatch = jest.spyOn(window, 'dispatchEvent')

describe('Image', () => {
	it('dispatches a CustomEvent onclick if props.lightbox=true.', () => {
		render(<Image src="test.jpg" lightbox alt="test" />)
		expect(mockDispatch.mock.calls.length).toEqual(0)
		const img = screen.getByAltText('test')
		userEvent.click(img)
		expect(mockDispatch.mock.calls.length).toEqual(1)
		expect(mockDispatch).toHaveBeenLastCalledWith(new CustomEvent('lightbox'))
		mockDispatch.mockClear()
	})

	it('wont dispatch a CustomEvent onclick if props.lightbox=false.', () => {
		render(<Image src="test.jpg" alt="test" />)
		expect(mockDispatch.mock.calls.length).toEqual(0)
		const img = screen.getByAltText('test')
		userEvent.click(img)
		expect(mockDispatch.mock.calls.length).toEqual(0)
		mockDispatch.mockClear()
	})
})
