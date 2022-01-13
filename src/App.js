import React from "react";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Signup from "./components/Signup/Signup";
import Events from "./components/Events/Events";


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
       <Route path="/signup">
         <Signup />
       </Route>
       <Route path="/events">
        <Events />
      </Route>
      </Switch>
    </Router>
  </div>
  );

}

export default App;
