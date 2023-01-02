import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { BiHome , BiArchiveIn } from 'react-icons/bi'
import { FaUserFriends} from 'react-icons/fa'
import { IoIosBookmark} from 'react-icons/io'


export default function Left() {
  return (
    <Leftbar >
       <Home height="50px" width="95%"><BiHome/>Home</Home>
       <Friends height="50px" width="95%"><FaUserFriends/>Friends</Friends>
       <Bookmark height="50px" width="95%"><IoIosBookmark/>Bookmark</Bookmark>
       <Archives height="50px" width="95%"><BiArchiveIn/>Archives</Archives>
    </Leftbar>
  )
}

const Leftbar=styled(Container)`
   grid-area: left;
`
const RoundContainer=styled(Container)`
   border-radius: 25px;
   display: flex;
   margin-top: 4px;
   color: black;
   align-items: center;
   justify-content: center;
`
const Home=styled(RoundContainer)`
`
const Friends=styled(RoundContainer)`
`
const Bookmark=styled(RoundContainer)`
`
const Archives=styled(RoundContainer)`
`
