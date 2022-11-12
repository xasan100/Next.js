//
import Image from 'next/image';
import useSWR from 'swr'
import { Block, Card, Container } from './style';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


function Profile( { title, coverImage, slug }) {
    
    const { data, error } = useSWR('https://greenshophorizontteam.herokuapp.com/product', fetcher)
    console.log(data,'res');
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    const filter1 = () => {
        let res = dataProducts.filter((item) => {
            return item.type === "houseplants";
        });
        setData(res);
        setActive("houseplants");
    };
    
  return (
    <Container>
   {data.map((value,ind)=>{
    return( <div key={ind}>
    <Block>  
 
  
   <p>{value.title}</p>
    </Block>
    </div> )
})}

     
    
    </Container>
  )
}
export default  Profile

