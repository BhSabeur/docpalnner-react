import React from "react";
import "./StatsBox.css";

function StatsBox(props) {
  return (
    <div className="shape">
      {props.boxStats.map((el, index) => (
        <div className="boxes" key={index}>
          <img src={el.image} />
          <br />
          <p>{el.title}</p>
          <h6>{el.description}</h6>
        </div>
      ))}
    </div>
  );
}
export default StatsBox;
