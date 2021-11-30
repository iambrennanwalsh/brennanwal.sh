import type {AppProps} from 'next/app'
import {Container} from '@/layouts'
import {ApiProvider, NotificationsProvider} from '@/contexts'
import {Styles} from '@/styles'
import {Global, css} from '@emotion/react'

export default function App({Component, pageProps}: AppProps): JSX.Element {
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
