import {useEffect} from 'react'

export function useSafariRenderHack(): void {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent
			)
			if (isSafari) {
				const notFirstVisit = sessionStorage.getItem('visited_key')
				if (!notFirstVisit) {
					sessionStorage.setItem('visited_key', 'true')
					window.location.replace(window.location.href)
				}
			}
		}
	}, [])
}
