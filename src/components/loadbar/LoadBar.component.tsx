import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {StyledLoadBar, StyledProgress} from './LoadBar.style'

export const LoadBar: App.LoadBarComponent = function ({className, styles}) {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(false)
		setTimeout(() => setLoading(true), 100)
	}, [router.asPath])

	return (
		<StyledLoadBar {...(styles && {css: styles})} {...(className && {className: className})}>
			<StyledProgress {...(loading && {className: 'animation loadbar'})} />
		</StyledLoadBar>
	)
}
