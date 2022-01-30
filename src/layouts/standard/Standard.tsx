import {Component, Props} from '@/'
import {PageTitle} from '@/components'
import type {BaseProps} from '@/layouts'
import {Base} from '@/layouts'
import {Main} from '@/partials'

export type StandardProps = Props<'div', BaseProps>

export const Standard: Component<StandardProps> = ({seo, children}) => {
  return (
    <Base seo={seo}>
      <Main>
        <PageTitle title={seo.title} description={seo.description} />
        {children}
      </Main>
    </Base>
  )
}
