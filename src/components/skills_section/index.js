import './style.css'
import { IoLogoNodejs } from 'react-icons/io';
import { ImHtmlFive } from 'react-icons/im';
import {SiCss3 } from 'react-icons/si';
import {SiReact } from 'react-icons/si';
import {DiJavascript } from 'react-icons/di';
import {SiJquery } from 'react-icons/si';
import {ImTrello } from 'react-icons/im';
import {MdScreenSearchDesktop } from 'react-icons/md';
import {SiMongodb } from 'react-icons/si';
import {GrMysql } from 'react-icons/gr';
import {BsBootstrapFill } from 'react-icons/bs';
const SKILLS=()=>{
    return(
        <div className="conenure_skills">
            <h1 className='name_section' >My SKILLS</h1>
                
                <div className='contener_allfb'>
            <div className='content_all' >
            <h1 className='name_box' >Frontend Development</h1>
            <div className="content_techskills">
                <div className='lift_box' >
                <div className='everyone' >
                    <h1  ><ImHtmlFive/> HTML</h1>
                   
                  
                </div>
                <div className='everyone' >
                    <h1><SiCss3/> CSS</h1>
                  
                  
                </div>
                <div className='everyone' >
                    <h1><SiReact/> REACT</h1>
                  
                  
                </div>
                </div>
                <div className='right_box' >
                <div className='everyone' >
                    <h1><DiJavascript/> JAVASCRIPT</h1>
                  
                  
                </div>
                <div className='everyone' >
                    <h1><SiJquery/> Jquery</h1>
                  
                  
                </div>
                <div className='everyone' >
                    <h1><BsBootstrapFill/> BootStrap</h1>
                  
                  
                </div>
               
                </div>
                
               
               
              
            </div>
            </div>
            <div className='content_all' >
            <h1 className='name_box' >Backend Development</h1>
            <div className="content_techskills">
           <div className='lift_box'  >
           <div className='everyone' >
                    <h1><IoLogoNodejs/> Nodejs</h1>
                   
                  
                </div>
               
                <div className='everyone' >
                    <h1><GrMysql/> MYSQL</h1>
                  
                  
                </div>
                <div className='everyone' >
                    <h1><ImTrello/> TRELLO</h1>
                  
                  
                </div>
                
               
                
           </div>
           <div  className='right_box' >
          
               
                <div className='everyone' >
                    <h1><SiMongodb/> Mongodb</h1>
                  
                  
                </div>
               
                <div className='everyone' >
                    <h1><DiJavascript/> JAVASCRIPT</h1>
                  
                  
                </div>
                <div className='everyone' >
                    <h1  ><MdScreenSearchDesktop/> Elastic Search</h1>
                  
                  
                </div>
           </div>
               
               
            </div>
            </div>
           </div>

        </div>
    )
}

export default SKILLS