import styled from "styled-components";

export  const Card =styled.div`
width: 100% ;
border:1px solid red;

`

export const Block=styled.div`
border: 1px solid blue ;
width: 300px ;
height: 350px ;
max-width: 300px ;
max-height: 300px ;
>p{
    font-size: 12px ;
}
>Image{
  width: 300px ;
}
`

export const Container=styled.div`
display: grid ;
grid-template-columns: auto auto auto ;
`