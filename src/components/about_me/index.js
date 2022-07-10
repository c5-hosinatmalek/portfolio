import "./style.css"
import my_img from "./img/WhatsApp Image 2022-06-30 at 1.22.57 AM.jpeg"
import {FaGraduationCap } from "react-icons/fa";
import {AiOutlineTeam } from "react-icons/ai";
const ABOUTME=()=>{
    return(
        <div className="contenur_aboutme">
            <h1 className="about_parg">About Me</h1>
            <div className="content_alll" >
                <div className="leftt_box" >
                    <img className="img_about" src={my_img} />
                </div>
                <div className="rightt_box">
                   <div className="all_advantag" >
                   <div className="advantage" >
                        <h1><FaGraduationCap/> </h1>
                        <p>Bachelor Of Computer Science</p>
                    </div>
                    <div className="advantage">
                    <h1><AiOutlineTeam/> </h1>
                    <p>Working on creating projects whthin a team</p>
                    </div>
                    <div className="advantage">
                    <h1><FaGraduationCap/> </h1>
                    <p>BootCamp more then +700 hours of programming</p>
                    </div>
                  
                   </div>
                   <p className="summary" >full stack developer with solid experience in bulding responsive web applicatione in every thing i do interested to work for a company that encourages innovative thinking and enables me to utlize my skills and abilities</p>
                </div>
            </div>

        </div>
    )
}
export default ABOUTME