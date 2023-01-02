import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { MdAddCircleOutline } from 'react-icons/md'
import Post from './Post'
import { useState, useEffect} from 'react'
import Backg  from './../../../images/backg.jpg'

export default function Gallary() {
  
  const [addon,setAddon]=useState(false);
  useEffect(()=>{
  },[addon]);
  const handleAdd=()=>{
      if(addon){
        setAddon(false);
      }
      else setAddon(true);
      console.log(addon)
  }
  return (
    <Center >
      <Post/>
      <AddPos dis={addon}>
        
       </AddPos>
      <AddPost><MdAddCircleOutline size={70} onClick={handleAdd}/></AddPost>
    </Center>
  )
}



const AddPos=styled.div`
   display: ${props => props.dis? "flex":"none"};
   color: white;
   height: 100%;
   width:  100%;
   position: absolute;
   top:0px;
   left: 0px;
   background-image: url(${Backg});
   background-repeat: no-repeat;
   background-size: cover;
   &:hover {
    cursor: pointer;
   }
`
const AddPost=styled.div`
   display: flex;
   color: white;
   border-radius: 50%;
   position: absolute;
   bottom:40px;
   right:40px;
   background-color: grey;
   &:hover {
    cursor: pointer;
   }
`
const Center=styled(Container)`
    grid-area: center;
`