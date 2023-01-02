import styled from 'styled-components'

export const Container=styled.div`

   display: ${props => props.disp || "inline-block"};
   align-items: center;
   justify-content: center;
   height: ${props => props.height || "100%"};
   width: ${props => props.width || "100%"};
   border: black solid 2px;
`

