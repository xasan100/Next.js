import { Box, Carusell, Container, Hero, ImgBox, Title, Width } from './style';
import 'antd/dist/antd.css';
import Image from "next/image";
import Big from "../Assets/GulBig.png"
import Min from "../Assets/GulMin.png"
import useSWR from 'swr'




const  GenCarusel=()=>{






    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const contentStyle = {
        margin: 0,
        height: '100%',
        color: '#fff',
        textAlign: 'center',
        speed: 900,

      };
return (
<Hero> 
<Width/>
<Carusell   afterChange={onChange}>
   <Container>
      <Box>
      <Title >
       <p>Welcome to GreenShop</p>
       <h1>
       Let’s Make a
       Better <b className='planet'>Planet</b>
       </h1>
       <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
       <button> SHOP NOW</button>
      </Title>
    <ImgBox>
    <Image className='Min'  src={Min} alt='s'/>
    <Image src={Big} srs='3e'/>
    </ImgBox>
      </Box>
   </Container>

    <Container>
      <Box>
      <Title >
       <p>Welcome to GreenShop</p>
       <h1>
       Let’s Make a
       Better <b className='planet'>Planet</b>
       </h1>
       <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
       <button> SHOP NOW</button>
      </Title>
    <ImgBox>
    <Image className='Min'  src={Min} alt='Srs'/>
 
    <Image src={Big}/>
    </ImgBox>
      </Box>
   </Container>
 </Carusell>
 </ Hero>
)
}

export default GenCarusel
 
