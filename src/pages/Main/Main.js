import React from 'react'
import Gallary from './gallary/Gallary'
import Topbar from './Topbar'
import Left from './Left'
import Right from './Right'
import styled from 'styled-components'

export default function Main(){
  return (
    <UnContainer> 
    <Topbar/>
    <Gallary /> 
    <Left /> 
    <Right />
    </UnContainer>
  )
}

const UnContainer=styled.div`
     display: grid;
     height: 100vh;
     width: 100vw;
     grid-template-rows: 1fr 19fr;
     grid-template-columns: 3fr 5fr 4fr;
     grid-template-areas: "header header header"
                          "left center right";
`

