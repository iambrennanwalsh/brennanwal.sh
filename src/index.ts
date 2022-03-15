import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithoutRef,
  ReactNode
} from 'react'
import type { Css } from './styles'

// Component Types

type Merge<T, U> = Omit<T, keyof U> & U

export interface BaseProps {
  children?: ReactNode
  className?: string
  css?: Css
}

export type Props<T extends ElementType, P = {}> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? PropsWithoutRef<JSX.IntrinsicElements[T]>
    : ComponentPropsWithoutRef<T>,
  BaseProps & P & { as?: T }
>

export type Component<P> = (props: P) => JSX.Element

// Resource Types

export interface Resource {
  title: string
  summary: string
  image: string
  timestamp: string
  category: string
  slug: string
}

export interface Article extends Resource {
  content: string
  featured?: boolean
  tags?: string[]
}

export interface Project extends Resource {
  external: string
}

export interface Notification {
  message: string
  type: 'info' | 'success' | 'warning' | 'danger'
}
