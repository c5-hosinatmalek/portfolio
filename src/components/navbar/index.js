import "./style.css"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import {Link} from "react-router-dom"
const NAVBAR=()=>{
    return(
        <nav>
          <a href="#" ><AiOutlineHome/></a>
          <a href="#" ><AiOutlineUser/></a>
          <a href="#" ><BiBook/></a>
          <a href="#" ><BiMessageDetail/></a>
        </nav>
    )
}
export default NAVBAR