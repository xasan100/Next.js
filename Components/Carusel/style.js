import styled from "styled-components"

  
export  const  Container=styled.div`
width: 100% ;
padding: 0px 100px ;

`

export const Box=styled.div`
display: grid ;
grid-template-columns: 5fr  5fr;
height: 50vh ;
background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);

`

export const  Title=styled.div`
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
font-size: 70px;
line-height: 70px;
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

export const ImgBox=styled.div`

`