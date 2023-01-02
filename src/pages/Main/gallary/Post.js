import React from 'react'
import styled from 'styled-components'
import {AiOutlineMore} from 'react-icons/ai'
import { Container } from '../../components/Container'

export default function Post(){
  return (
    <PostWrapper>
      {/* account details - profile pic then name special actions symbol : three dots*/}
      {/* post details posted on icon of reach*/}
      {/* discription and then the image if given */}
      {/* likes and comments share and repost options */}
    <SpecificPost>
    <AccountDetails><ProfilePic>heyyy!!
                    </ProfilePic>this the name of account holder
                    <AiOutlineMore/>
    </AccountDetails>
    <PostDetails> posted on last hour... </PostDetails>
    <DiscOfPost> heu this is my first post theat is a treat of comma</DiscOfPost>
    <PicOfPost></PicOfPost>
    </SpecificPost>
    </PostWrapper>
  )
}
const BottomOfPost=styled(Container)`

`
const DiscOfPost=styled(Container)`
      background-color: aliceblue;
      height: 20%;
`
const PicOfPost=styled(Container)`
      background-color: lightcyan;
      height: 60%;
`
const PostDetails=styled(Container)`
     background-color: aqua;
     height: 14px;
`

const ProfilePic=styled(Container)`
   display: flex;
   border-radius: 50%;
   width: 50px;
   background-color: green;
`
const AccountDetails=styled(Container)`
   display: flex;
   height: 50px;
     
`
const SpecificPost=styled(Container)`

   height: 98%;
   align-items: center;
   border-radius:4px;
   width: 98%;
   border-top: 1px solid grey;
   border-bottom: 1px solid grey;
   border-left: 3px solid grey;
   border-right: 3px solid grey;
    
`
const PostWrapper=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 1001px;
   height: 65%;
   /* background-color: red; */
`