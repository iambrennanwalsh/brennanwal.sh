import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export const Anchor: App.AnchorComponent = ({
	href,
	activeClassName,
	shallow,
	className,
	styles,
	children
}) => {
	const router = useRouter()

	const [type] = useState<string>(() => {
		if (href == undefined) return 'none'
		else if (/^(https?:\/\/)/.test(href)) return 'external'
		else return 'internal'
	})

	const [md, setMd] = useState('')

	const [isActive, setIsActive] = useState<boolean>(
		() => type == 'internal' && router.asPath === href
	)

	useEffect(() => {
		if (typeof router.asPath !== undefined && md !== router.asPath)
			setMd(router.asPath)
	})

	useEffect(() => {
		setIsActive(() => type == 'internal' && md === href)
	}, [md])

	const props = {
		'data-testid': type,
		shallow: shallow,
		href: href,
		...(styles && {css: styles}),
		...(className && {className: className}),
		...(activeClassName &&
			isActive && {className: `${className} ${activeClassName}`})
	}

	return type == 'internal' ? (
		<Link {...props}>
			<a {...props}>{children}</a>
		</Link>
	) : type == 'external' ? (
		<a {...props}>{children}</a>
	) : (
		<>{children}</>
	)
}
