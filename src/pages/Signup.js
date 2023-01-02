import React from 'react'
import { useState ,useEffect } from 'react';
import styled from 'styled-components'
import { Container } from './components/Container';


export default function SignIn() {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    useEffect(()=>{
        console.log(email)
        console.log(pass)
    },[email,pass]);
    return (
    <Container height="300px" width="440px" >
    <Heading>
        SignIn
    </Heading>
    <Input value={pass} onChange={(e)=> setPass(e.target.value)}>
    </Input>
    <Heading>
       Email
    </Heading>
    <Input value={email} onChange={(e)=> setEmail(e.target.value)}>
    </Input>
    <Submit>submit</Submit>
    </Container>
  )
}
const Submit=styled.button`
    background-color: green;
    display: block;
    height: 40px;
    width: 85px;
    border: none;
    border-radius: 20px;
    color: white;
    margin: 5px;
`

const Heading=styled.div`
   margin-left: 20px;
   color: lightblue;
   `
const Input=styled.input`
   margin: 10px;
   font-style: none;
   display: block;
   height: 20px;
   width: 350px;
   outline: none;
   border: none;
   border-bottom: 1px solid lightgrey;

`
