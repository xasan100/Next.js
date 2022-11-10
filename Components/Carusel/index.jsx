import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Box, Container, ImgBox, Title } from './style';


const  GenCarusel=()=>{
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
const contentStyle = {
        margin: 0,
        height: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        speed: 900,
        background: '#364d79',

      };
return (

<div>

<Carousel  afterChange={onChange}>
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
    11
    </ImgBox>
      </Box>
   </Container>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
 </Carousel>
</div>)
}

export default GenCarusel
 
