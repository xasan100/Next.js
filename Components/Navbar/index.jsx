import Container from "./style"

 const { default: Link } = require("next/link")
const Navbar =()=>{
    return (

        <Container> 
           <Link href={'/'}> <p>index</p>  </Link> 
           <Link href={'/home'}> <p>Home</p>  </Link> 
           <Link href={'/basket'}> <p>basket</p> </Link> 
           <Link href={'/login'}> <p>Login</p> </Link> 
           </Container>  
    )
}
export default Navbar 