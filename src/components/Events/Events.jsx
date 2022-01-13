import React from "react";
import eventinfo from "./eventinfo";
import "./Events_css.css";

function Events(props) {
  return (
    <div>

     <div className="cards">
      <div className="data">
         <span className="emoji" role="img">
            {props.emoji}
          </span>
          <span className="name">{props.name}</span>

      <div className="bottom">

        <span className="meaning"><p >{props.meaning}</p></span>
      </div>
    </div>
    </div>

  </div>);
}

export default Events;
