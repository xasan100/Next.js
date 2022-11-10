import styled from "styled-components";
const { default: Link } = require("next/link")

export const Conatiner=styled.div`
width: 100% ;
padding: 0px 100px  ;
margin: 0px auto ;
max-width: 1440px ;
box-sizing: border-box ;
>h3{
text-align: center ;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #46A358;

}
`

export const Box=styled.div`
display: grid ; 
grid-template-columns: 2fr 7fr ;
gap:0px 20px ;
`

export  const  Menu=styled.div`
border: 1px solid red ;
width: 100% ;
height: 90vh ;
background: #FBFBFB;
box-sizing: border-box ;

>p{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D; 
padding-left: 5px ;
padding-top: 15px ;
}
>div{

display: flex ;
padding: 0px 15px ;
justify-content:space-between ;
>p{
  cursor: pointer;
}

}
`
export const Product=styled.div`
border: 1px solid red ;
height: 90vh ;
`