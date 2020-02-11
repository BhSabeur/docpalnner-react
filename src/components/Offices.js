import React from "react";

function Offices(props) {
  return (
    <div className="cities">
      {props.cityOffices.map((el, index) => (
        <div key={index}>
          <img className="pic" src={el.image} />
          <div className="btn">
            <h6>{el.title}</h6>
            <button className="see-opennings">See Openings</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offices;
