
import my_img from "./img/WhatsApp Image 2022-06-30 at 1.22.57 AM.jpeg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import SKILLS from "../skills_section";
import CONCAT from "../concat_me"
import Button from 'react-bootstrap/Button';
import ABOUTME from "../about_me";
import MYPROGECT from "../my_project";
import "./style.css"
const MAINPAGE=()=>{
return(
    <div>
    <div className="contenur_mainpage">
        <div className="content_main" >
        <img  src={my_img}  alt="img_malek"/>
        <h1>Hi, I'm MALEK  </h1>
        <p>I Software developer full stack</p>
        <div className="icon_social" >
        <Link to={"/"} >  <FaFacebookSquare/></Link>
        <Link to={"/"} >  <FaInstagramSquare/></Link>
        <Link to={"/"} >  <FaGithubSquare/></Link>
        <Link to={"/"} >  <BsLinkedin/></Link>
          
          
          
          
        </div>
        <a className="downlode" href={my_img}  download >download cv</a>
      
        </div>
       

    </div>
    <ABOUTME/>
    <SKILLS/>
    <MYPROGECT/>
    <CONCAT/>
    </div>
)
}

export default MAINPAGE