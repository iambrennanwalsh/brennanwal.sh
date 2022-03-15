import { Component, Props } from '@/'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { StyledLoadBar, StyledLoader } from './LoadBar.style'

export type LoadBarProps = Props<'div'>

export const LoadBar: Component<LoadBarProps> = function (props) {
  const router = useRouter()

  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
    setLoad(false)
    setTimeout(() => setLoad(true), 500)
  }, [router.asPath])

  return (
    <StyledLoadBar data-component="loadbar" {...props}>
      <StyledLoader load={load} />
    </StyledLoadBar>
  )
}

LoadBar.toString = () => '[data-component="loadbar"]'
