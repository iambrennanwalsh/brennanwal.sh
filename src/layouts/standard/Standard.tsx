import { Component, Props } from '@/'
import { PageTitle } from '@/components'
import type { BaseProps } from '@/layouts'
import { Base } from '@/layouts'
import { Main } from '@/partials'

interface StandardOwnProps extends BaseProps {
  pageTitle: {
    title: string
    description: string
    image?: string
  }
}

export type StandardProps = Props<'div', StandardOwnProps>

export const Standard: Component<StandardProps> = ({
  seo,
  pageTitle,
  children
}) => {
  return (
    <Base seo={seo}>
      <Main>
        <PageTitle {...pageTitle} />
        {children}
      </Main>
    </Base>
  )
}
