import { useRouter } from "next/router"
import Container, { Linked, LogoBox } from "./style"
import Image from "next/image";
import logo from "../Assets/logo.svg"
import basket from "../Assets/basket.svg"

const Navbar =()=>{
    const query = useRouter()
    return (
        <Container> 
        <LogoBox>
            <Image  src={logo}/>
            <h3>GREENSHOP</h3>
         </LogoBox>
           <Linked href={'/home'}> <p className={query.pathname === '/home' ? 'active' : ''}>Home</p>  </Linked> 
           <Linked href={'/shop'}> <p className={query.pathname === '/shop' ? 'active' : ''}>Shop</p>  </Linked> 
           <Linked href={'/basket'}> <p className={query.pathname === '/basket' ? 'active' : ''}> <Image src={basket}/> </p> </Linked> 
           <Linked href={'/login'}> <p className={query.pathname === '/login' ? 'active' : ''}>Login</p> </Linked> 
           <style jsx>{`
           *{
            margin:0px;
            padding:0px;
            
           }
              .active{
                color: #46a358 !important;
              }
            `}</style>
         </Container>  
       
    )
}
export default Navbar 