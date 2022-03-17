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
  image: string
  category: string
  summary: string
  timestamp: string
  title: string
}

export interface Article extends Resource {
  content: string
  featured?: boolean
  slug: string
  tags?: string[]
}

export interface Project extends Resource {
  href: string
}

export interface Notification {
  message: string
  type: 'info' | 'success' | 'warning' | 'danger'
}
