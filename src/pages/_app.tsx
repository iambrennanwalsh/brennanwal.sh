import {
  ApiContextProvider,
  ComponentContextProvider,
  NotificationsContextProvider
} from '@/contexts'
import { Container } from '@/partials'
import { globalStyles } from '@/styles'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

globalStyles()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout || (page => page)
  const [resources, setResources] = useState(
    pageProps.resources ? pageProps.resources : {}
  )

  useEffect(() => {
    setResources(pageProps.resources)
  }, [pageProps])

  return (
    <ApiContextProvider value={resources}>
      <NotificationsContextProvider>
        <ComponentContextProvider>
          <Container>{getLayout(<Component {...pageProps} />)}</Container>
        </ComponentContextProvider>
      </NotificationsContextProvider>
    </ApiContextProvider>
  )
}
