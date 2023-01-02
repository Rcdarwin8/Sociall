import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import Post from './Post'

export default function Gallary() {
  return (
    <Center >
      <Post/>
    </Center>
  )
}

const Center=styled(Container)`
    grid-area: center;
`