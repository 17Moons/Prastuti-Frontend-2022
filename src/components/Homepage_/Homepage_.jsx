import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "../Signup_/Signup/Signup_";
import React, { useState } from "react";


import './Homepage_css_.css';



function Toggle() {



  document.getElementById('menu-toggle').addEventListener('click', (e)=> {
      e.stopPropagation();
      document.getElementById('sidebar').classList.toggle('visible');
      document.getElementById('sidebar-content').classList.toggle('d-none');
      document.getElementById('content').classList.toggle('shift');
      document.getElementById('overlay').classList.toggle('overlay');
  })

  document.getElementById('overlay').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('visible');
      setTimeout(()=>{
          document.getElementById('sidebar-content').classList.add('d-none');
      },400);
      document.getElementById('content').classList.remove('shift');
      document.getElementById('overlay').classList.remove('overlay');
      closeModal();
  })

  document.getElementById('get-started').addEventListener('click', () => {
      document.getElementById('sign-up-modal').classList.add('modal-visible');
      setTimeout(()=>{
          document.getElementById('modal-content').classList.remove('d-none');
      },300);
      document.getElementById('overlay').classList.add('overlay');

  })

  document.getElementById('close-modal').addEventListener('click', closeModal);

  function closeModal()
  {
      document.getElementById('overlay').classList.remove('overlay');
      document.getElementById('sign-up-modal').classList.remove('modal-visible');
      document.getElementById('modal-content').classList.add('d-none');
  }

}



function Homepage() {

  return (

    <div className="Homepage" id="content">
   <div className="basepage" id="content">
    <div className="link-homepage-text" id="content">
      <h3 className="links_homepage_sign" id="menu-toggle" onClick={Toggle}>Login</h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage"> Prastuti 22 </h1>
    <h4 className="description">Now that your eyes are open, make the sun jealous with your burning
passion to start the day. Make the sun jealous or stay in bed.</h4>
    </div>
  </div>


    <div id="sidebar">
          <div id="sidebar-content" class="d-none">

              <div class="sidebar-menu">
                  <Signup />
              </div>
          </div>
      </div>
  </div>

);
}

export default Homepage;
