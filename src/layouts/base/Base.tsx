import type {Component, Props} from '@/'
import {Seo} from '@/components'
import type {ComponentPropsWithoutRef} from 'react'

interface BaseOwnProps {
  seo: ComponentPropsWithoutRef<typeof Seo>
}

export type BaseProps = Props<'div', BaseOwnProps>

export const Base: Component<BaseProps> = ({seo, children}) => {
  return (
    <>
      <Seo {...seo} />
      {children}
    </>
  )
}
