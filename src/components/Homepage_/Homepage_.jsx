import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "../Signup/Signup";

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

    <div className="Homepage">

    <div className="link-homepage-text">
      <h3 className="links_homepage sign" id="menu-toggle" onClick={Toggle}>Login</h3>
      <h3 className="links_homepage about"><Link to="/aboutus" style={{ textDecoration: 'none' ,color: 'inherit' }} >About Us</Link></h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage"> Prastuti 22 </h1>
    <h4 className="description">Now that your eyes are open, make the sun jealous with your burning
passion to start the day. Make the sun jealous or stay in bed.</h4>
    </div>


    <div id="sidebar">
          <div id="sidebar-content" class="d-none">

              <div class="sidebar-menu">
                  <div class="sidebar-menu-item">Home</div>
                  <div class="sidebar-menu-item">Portfolio</div>
                  <div class="sidebar-menu-item">Blog</div>
                  <div class="sidebar-menu-item">Contact Me</div>
              </div>
          </div>
      </div>
  </div>

);
}

export default Homepage;
