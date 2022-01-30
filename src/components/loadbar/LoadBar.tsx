import {Component, Props} from '@/'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {StyledLoadBar} from './LoadBar.style'

export type LoadBarProps = Props<'div'>

export const LoadBar: Component<LoadBarProps> = function (props) {
  const router = useRouter()

  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
    setLoad(false)
    setTimeout(() => setLoad(true), 100)
  }, [router.asPath])

  return (
    <StyledLoadBar load={load} {...props}>
      <div />
    </StyledLoadBar>
  )
}
