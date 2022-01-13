import {Link} from "react-router-dom";


import './Homepage-css.css';



function Homepage() {

  return (

   <div>

    <div className="Homepage">


    <div className="link-homepage-text">
      <h3 className="links_homepage sign"><Link to="/signup" style={{ textDecoration: 'none' ,color: 'inherit' }}>Sign Up</Link></h3>
      <h3 className="links_homepage about"><Link to="/aboutus" style={{ textDecoration: 'none' ,color: 'inherit' }} >About Us</Link></h3>

    </div>

    <div className="content-homepage">
      <h1 className="main-heading-homepage"> Prastuti '22 </h1>
    <h4 className="description">Now that your eyes are open, make the sun jealous with your burning
passion to start the day. Make the sun jealous or stay in bed.</h4>
    </div>

  </div>






  </div>);
}

export default Homepage;
