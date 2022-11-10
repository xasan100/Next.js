import { useRouter } from "next/router"
import { Box, Conatiner, Linked, Menu, Product } from "./style"
const { default: Link } = require("next/link")

const Filter=()=>{
    const query = useRouter()
    return (
        <Conatiner>

        <h3>Allplants</h3>
<Box>
<Menu> 
    <p>Categories</p>
    <div> <p>House Plants </p> <p>(36)</p></div>   
    <div> <p>Potter Plants </p> <p>(12)</p></div>   
    <div> <p>Seeds </p> <p>(65)</p></div>   
    <div> <p>Small Plants </p> <p>(39)</p></div>   
    <div> <p>Big Plants </p> <p>(23)</p></div>   
    <div> <p>Succulents </p> <p>(17)</p></div>   
    <div> <p>Trerrariums </p> <p>(19)</p></div>   
    <div> <p>Gardening </p> <p>(13)</p></div>   
    <div> <p>Accessories </p> <p>(18)</p></div>   

    </Menu>

<Product>2</Product>
</Box>
        </Conatiner>
        
    )
}
export default Filter

