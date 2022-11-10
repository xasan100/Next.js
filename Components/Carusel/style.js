import styled from "styled-components"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

  
export  const  Container=styled.div`
width: 100% ;
margin: 0 auto ;
`

export const Box=styled.div`
display: grid ;
grid-template-columns: 5fr  5fr;
background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);


`


export const  Title=styled.div`
display: flex ;
flex-direction: column ;
justify-content: space-evenly ;
width: 100% ;
padding: 50px 40px  ;
>p{
 font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #3D3D3D;  
}

>h1{
 font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 60px;
line-height: 60px;
text-transform: uppercase;
color: #3D3D3D;
}
>button{
background: #46A358;
border-radius: 6px;
width: 120px;
height: 40px ;
border: none ;
color: white ;
}
.planet{
    color: #46A358;
}
`


export const Carusell=styled(Carousel)`
width: 100% ;
margin: 0  auto ;

`

export const ImgBox=styled.div`
display:  flex;
position: relative;
justify-content: end ;
.Min{
    position: absolute ;
    top: 350px ;
    bottom: 0px ;
    left: 100px ;
    right: 0px ;
}
`
export const Width=styled.div`
width: 100% ;
padding: 0px 100px  ;
height: 2px ;
background-color: #46A358  ;
margin-bottom:  30px;
opacity: 0.2 ;
`
export const Hero=styled.div`
width: 100% ;
box-sizing: border-box ;
padding: 0px 100px ;
margin: 0px  auto ;
padding: 0px 100px ;
max-width: 1440px ;


`