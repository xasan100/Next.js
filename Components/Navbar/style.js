import styled from "styled-components";
const { default: Link } = require("next/link")

const Container=styled.div`
width:  100%;
padding: 0px 100px ;
margin: 0 auto ;
color: red ;
display: flex ;
margin-top: 33px ;
margin-bottom: 26px ;
box-sizing: border-box  ;
justify-content: space-between ;
align-items: center ;
max-width: 1440px ;

`

export  const Linked=styled(Link)`
text-decoration-line: none ;
color: black ;
>p{
    :hover{
        color: #40a9ff;
    }
}
`

export  const LogoBox=styled.div`
display: flex ;
align-items: center ;
>Image {
width:34px ;
height: 34px ;
cursor: pointer;
}
>h3{
margin-left: 5px ;
color: #46A358;
cursor: pointer;
}
` 

export default Container