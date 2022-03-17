import type { Component, Props } from '@/'
import { Content, Sidebar } from '@/partials'
import Script from 'next/script'
import { StyledMain } from '.'

export type MainProps = Props<typeof StyledMain>

export const Main: Component<MainProps> = ({ children, ...props }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CYC34DR7C4');
        `}
      </Script>
      <StyledMain id="main" {...props}>
        <Content>{children}</Content>
        <Sidebar />
      </StyledMain>
    </>
  )
}
