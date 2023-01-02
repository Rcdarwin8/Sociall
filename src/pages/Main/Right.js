import React from 'react'
import { Container } from '../components/Container'
import styled from 'styled-components'

export default function Right() {
  return (
    <Rightbar>
    <Blocks height="290px">basic</Blocks>
    <Blocks height="2px">basic</Blocks>
    <Blocks height="20px">basic</Blocks>
    </Rightbar>
  )
}

const Rightbar=styled(Container)`
  grid-area: right;
`
const Blocks=styled(Container)`
`
