import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'


export default function Topbar() {
  return (
    <Topbarr height="40px" width="100%">
    </Topbarr>
  )
}

const Topbarr=styled(Container)`
    grid-area: header;
`