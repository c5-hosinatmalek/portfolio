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
        </div>
    )
}
export default MYPROGECT