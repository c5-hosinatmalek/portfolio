import './style.css'
import {Link} from 'react-router-dom'
import imgpage from './img/computerec.png'
const MYPROGECT=()=>{
    return(
        <div className="contenur_progect" >
            <h1 className='gbgb' >MY PROGECT</h1>
            <div className="content_progect">
               <Link className='linkprgect' to={"/computer-shope"} >
                <div className='progect' >
                    <img src={imgpage}/>
                </div>
                <h1>COMPUTER SHOP</h1>
                </Link> 
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925169946631408"
     crossorigin="anonymous"></script>
        </div>
    )
}
export default MYPROGECT