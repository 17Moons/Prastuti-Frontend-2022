import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import Signup from "../Signup/Signup";

import './Homepage-css.css';

/*
function toggle() {

  ReactDOM.findDOMNode('menu-toggle').addEventListener('click', (e)=> {
      e.stopPropagation();
      ReactDOM.findDOMNode('sidebar').classList.toggle('visible');
      ReactDOM.findDOMNode('sidebar-content').classList.toggle('d-none');
      ReactDOM.findDOMNode('content').classList.toggle('shift');
      ReactDOM.findDOMNode('overlay').classList.toggle('overlay');
  })

  ReactDOM.findDOMNode('overlay').addEventListener('click', () => {
      ReactDOM.findDOMNode('sidebar').classList.remove('visible');
      setTimeout(()=>{
          ReactDOM.findDOMNode('sidebar-content').classList.add('d-none');
      },400);
      ReactDOM.findDOMNode('content').classList.remove('shift');
      ReactDOM.findDOMNode('overlay').classList.remove('overlay');
      closeModal();
  })

  ReactDOM.findDOMNode('get-started').addEventListener('click', () => {
      ReactDOM.findDOMNode('sign-up-modal').classList.add('modal-visible');
      setTimeout(()=>{
          ReactDOM.findDOMNode('modal-content').classList.remove('d-none');
      },300);
      ReactDOM.findDOMNode('overlay').classList.add('overlay');

  })

  ReactDOM.findDOMNode('close-modal').addEventListener('click', closeModal);

  function closeModal()
  {
      ReactDOM.findDOMNode('overlay').classList.remove('overlay');
      ReactDOM.findDOMNode('sign-up-modal').classList.remove('modal-visible');
      ReactDOM.findDOMNode('modal-content').classList.add('d-none');
  }

}

*/

function Homepage() {

  return (

    <div className="Homepage">

    <div className="link-homepage-text">
      <h3 className="links_homepage sign"> <Link to="/signup" style={{ textDecoration: 'none' ,color: 'inherit' }} > Sign Up</Link></h3>
      <h3 className="links_homepage about"><Link to="/aboutus" style={{ textDecoration: 'none' ,color: 'inherit' }} >About Us</Link></h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage"> Prastuti 22 </h1>
    <h4 className="description">Now that your eyes are open, make the sun jealous with your burning
passion to start the day. Make the sun jealous or stay in bed.</h4>
    </div>

  </div>

);
}

export default Homepage;
