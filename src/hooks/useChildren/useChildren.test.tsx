// Button Test (client/src/components/button)

import React from 'react'
import {useChildren} from '.'
import {renderHook, act} from '@testing-library/react-hooks'
import TestRenderer from 'react-test-renderer'

const Parent: React.FC = ({children}) => {
	return <div>{children}</div>
}
const ChildA = () => <p>Testing 1..2..3..</p>
const ChildB = () => <p>Testing 3..2..1..</p>
const ChildC = () => <p>Testing 1..3..2..</p>

describe('useChildren Hook', () => {
	it('Returns one or multiple children of a certain type.', () => {
		const renderedTree = TestRenderer.create(
			<Parent>
				<ChildA /> <ChildA />
			</Parent>
		)
		const parentComponent = renderedTree.root.findByType(Parent)
		const childComponent = renderedTree.root.findAllByType(ChildA)
		const {result} = renderHook(() => useChildren(parentComponent.props.children))
		let testChild: React.ReactNode
		let testChildren: React.ReactNode
		act(() => {
			testChild = result.current.withType(ChildA)
			testChildren = result.current.withType(ChildA, true)
		})
		expect((testChild as React.ReactElement).type).toEqual(childComponent[0].type)
		expect((testChildren as React.ReactElement[]).length).toBe(2)
		expect((testChildren as React.ReactElement[]).map(el => el.type)).toEqual(
			childComponent.map(el => el.type)
		)
	})

	it('Returns one or multiple children whose type is not included in a passed array.', () => {
		const renderedTree = TestRenderer.create(
			<Parent>
				<ChildA /> <ChildA />
				<ChildB /> <ChildB />
				<ChildC /> <ChildC />
			</Parent>
		)
		const parentComponent = renderedTree.root.findByType(Parent)
		const childComponent = renderedTree.root.findAllByType(ChildA)
		const {result} = renderHook(() => useChildren(parentComponent.props.children))
		let testChild: React.ReactNode
		let testChildren: React.ReactNode
		act(() => {
			testChild = result.current.withoutTypes([ChildB, ChildC], false)
			testChildren = result.current.withoutTypes([ChildB, ChildC])
		})
		expect((testChild as React.ReactElement).type).toEqual(childComponent[0].type)
		expect((testChildren as React.ReactElement[]).filter(el => typeof el != 'string').length).toBe(
			2
		)
		expect(
			(testChildren as React.ReactElement[]).filter(el => typeof el != 'string').map(el => el.type)
		).toEqual(childComponent.map(el => el.type))
	})
})
