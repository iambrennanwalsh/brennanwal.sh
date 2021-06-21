import {
	Children as Child,
	cloneElement,
	isValidElement,
	useEffect,
	useState
} from 'react'

export const useChildren = (children: React.ReactNode) => {
	const [Children, setChildren] = useState<React.ReactNode[]>(
		Child.toArray(children)
	)

	useEffect(() => {
		if (!Children) return
		setChildren(Child.toArray(children))
	}, [children])

	function _getType(component: React.ReactNode) {
		return isValidElement(component)
			? component.type['name']
			: typeof component === 'function'
			? component.name
			: typeof component
	}

	function hasType(component: React.ReactNode) {
		const type = _getType(component)
		return (element: React.ReactNode) => _getType(element) === type
	}

	function hasTypes(components: React.ReactNode[]) {
		const types = components.map(_getType)
		return (element: React.ReactNode) => types.includes(_getType(element))
	}

	function withType(component: React.ReactNode, multiple = false) {
		const typeCheck = hasType(component)
		const result = multiple
			? Children.filter(typeCheck)
			: Children.find(typeCheck)
		return result
	}

	function withoutTypes(components: React.ReactNode[], multiple = true) {
		const typeCheck = hasTypes(components)
		return multiple
			? Children.filter(child => !typeCheck(child)).filter(Boolean)
			: Children.find(child => !typeCheck(child))
	}

	function withProps(
		component: React.ReactElement,
		props: {[index: string]: unknown}
	) {
		return Array.isArray(component)
			? component.map(el => cloneElement(el, props))
			: cloneElement(component, props)
	}

	return {hasType, hasTypes, withType, withoutTypes, withProps}
}
