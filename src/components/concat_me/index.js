import {SiGmail } from "react-icons/si";
import {BsWhatsapp } from "react-icons/bs";
import './style.css'
import emailjs from '@emailjs/browser';
import React,{useRef} from "react";
import { useState } from "react";
import {IoIosCheckmarkCircle} from "react-icons/io";
const CONCAT=()=>{
    const [messageuser,setMessageuser]=useState("")
    const [classactive,setClassactive]=useState("")
    const form =useRef()
    const sendEmail=(e)=>{
        e.preventDefault();
    
        emailjs.sendForm('service_q2l7qoc', 'template_1p61nn1',form.current, 'wcyxPisXEt835rsYk')
          .then((result) => {
              console.log(result.text);
                setTimeout(()=>{
                    setClassactive("active")
                },100)
                setTimeout(()=>{
                    setClassactive("")
                },5000)
          }, (error) => {
              console.log(error.text);
          });
        //   e.target.resat()
     }
    return(
        <div className="contenur_concat">
            <h1 className="pargraph_contact" >Contact Me</h1>
            <div className="content_concat" >
                <div className="left_boxcon" >
                    <div className="email">
                        <h><SiGmail/> </h>
                        <h1>Email</h1>
                        <p>malek.f.hosinat@gmail.com</p>
                        <a href="mailto:malek.f.hosinat@gmail.com">Send a message</a>
                    </div>
                    <div className="whatsapp">
                        <h><BsWhatsapp/> </h>
                        <h1>whatsapp</h1>
                        <p>+962789821306</p>
                        <a href="https://api.whatsapp.com/send?phone=+962789821306">Send a message</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="input-bpxx">
                        <input type="text" placeholder="Enter your email " name="name" / >

                    </div>
                    <div className="input-bpxx">
                        <input type="text" placeholder="Enter your name " name="email" / >
                            
                    </div>
                    <div className="input-bpxx massage-box">
                        <textarea placeholder="your message" name="message" ></textarea>
                            
                    </div>
                    <div className="button">
                        <button className={`buttonn ${classactive}`}  type="submit"  >Send Now</button>
                            
                    </div>
                    <h1 className={`message_succefuly ${classactive}`}><IoIosCheckmarkCircle/> Sent succesfully</h1>
                </form>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925169946631408"
     crossorigin="anonymous"></script>
        </div>
    )
}
export default CONCAT