import React from 'react';
import './Aboutus_css.css';
import { BiArrowBack } from 'react-icons/bi';
import {AiFillMail  } from "react-icons/ai";


function AboutUS(){
  return (
    
    <div className="aboutus">
      <div className='header'>
        <div className="Back"><BiArrowBack size = {38} /></div>
        <h1 className='heading'>About US</h1>
      </div>
      
        <p className='body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ornare diam nec aliquam. Duis feugiat nisi quis est dictum, molestie placerat eros vulputate. Sed vitae elementum eros, sodales varius nisi. Morbi eu interdum lorem. Praesent non nibh eleifend, consequat lacus in, pharetra nunc.
        </p>
    
        <a className='mail_icon' href='mailto:prastuti.tectteam@gmail.com'><AiFillMail size = {30}  /></a>
    </div>

  );
}


export default AboutUS;
