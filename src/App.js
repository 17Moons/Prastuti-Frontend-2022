import React from "react";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Events from "./components/Events/Events";
import Signup from "./components/Signup/Signup";
import Sig from "./components/Signup/Signup";
import Homepae from "./components/Homepage_/Homepage_";



function App(){
  return (
    <div>
    <Router>
      <Switch>
       <Route exact path="/">
         <Homepage />
       </Route>
       <Route path="/aboutus">
         <Aboutus />
       </Route>
       <Route path="/homepae">
         <Homepae />
       </Route>
       <Route path="/events">
        <Events />
      </Route>
      <Route path="/signup">
       <Sig />
     </Route>
      </Switch>
    </Router>
  </div>
  );

}

export default App;
