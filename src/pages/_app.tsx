import type {AppProps} from 'next/app'
import {Container} from '@/layouts'
import {ApiProvider, NotificationsProvider} from '@/contexts'
import {Styles} from '@/styles'
import {Global, css} from '@emotion/react'
import {useSafariRenderHack} from '@/hooks'

export default function App({Component, pageProps}: AppProps): JSX.Element {
	useSafariRenderHack()
	return (
		<ApiProvider>
			<NotificationsProvider>
				<Global
					styles={css`
						${Styles}
					`}
				/>
				<Container>
					<Component {...pageProps} />
				</Container>
			</NotificationsProvider>
		</ApiProvider>
	)
}
