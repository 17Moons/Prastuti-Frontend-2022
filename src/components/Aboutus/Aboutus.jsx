import React from 'react';
import './Aboutus_css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-tilt';


import {FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa';



function AboutUS(){
  return (
    <div>
    <div className="aboutus">
      <div className='header'>

        <h1 className='heading'>About Us</h1>
      </div>

        <p className='content_about_us'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ornare diam nec aliquam. Duis feugiat nisi quis est dictum, molestie placerat eros vulputate. Sed vitae elementum eros, sodales varius nisi. Morbi eu interdum lorem. Praesent non nibh eleifend, consequat lacus in, pharetra nunc.
        </p>
  </div>

        <footer id="footer">

  <Tilt className="Tilt"   options={{ max : 45 }} style={{ scale: 1, }} >

              <a className='facebooklogo' href='https://www.facebook.com/prastuti.iitbhu/'   target="_blank" ><FaFacebookF size={25}/></a>


            <a className='instagramlogo' href='https://www.instagram.com/prastuti.iitbhu/?hl=en'   target="_blank" ><FaInstagram size={36}/></a>

          <a className='linkedinlogo' href='https://www.linkedin.com/company/prastuti/'  target="_blank" ><FaLinkedinIn size={36}/></a>
</Tilt>
        <h2 className="foot_pras">PRASTUTI</h2>
        </footer>


</div>

  );
}


export default AboutUS;
