const { default: Link } = require("next/link")

const Navbar =()=>{
    return (
        <div>
           <Link href={'/home'}> <p>Home</p>  </Link> 
           <Link href={'/login'}> <p>Login</p> </Link> 
           <Link href={'/'}> <p>index</p>  </Link> 
           <Link href={'/backet'}> <p>Basket</p> </Link> 
           <Link href={'/login'}> <p>Login</p> </Link> 

           
         </div>
    )
}
export default Navbar 