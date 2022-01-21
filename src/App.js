import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Signup from "./components/Signup_/Signup/Signup_";
import Homepage from "./components/Homepage_/Homepage_";



function App(){
  return (
    <div>
    <Router>
      <Switch>
       <Route exact path="/">
         <Homepage />
         <Aboutus />
       </Route>
      <Route path="/signup">
       <Signup />
     </Route>
      </Switch>
    </Router>
  </div>
  );

}

export default App;
