import GenCarusel from "../../Components/Carusel"
import Filter from "../../Components/Filter"
import MainLayaut from "../../Components/MainLayaut"
import Block from "./style"

const Home=()=>{
    return (<MainLayaut>
<Block>
<GenCarusel/>
<Filter/>
</Block> 
</MainLayaut>)
}

export default Home