import { Component, Props } from '@/'
import { Main } from '@/partials'

export type StandardProps = Props<'div'>

export const Standard: Component<StandardProps> = ({ children }) => {
  return <Main>{children}</Main>
}
