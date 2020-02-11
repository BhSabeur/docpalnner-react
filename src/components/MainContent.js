import React from "react";

import "./Box.css";

function MainContent(props) {
  return (
    <div className="box-Container">
      {props.boxContent.map((el, index) => (
        <div
          key={index}
          className={el.select ? "box green-Box" : "box blue-Box"}
        >
          <h5>{el.title}</h5>
          <h1>{el.subTitle}</h1>
          {el.select ? (
            <select>
              {" "}
              {el.select.map(el => (
                <option>{el}</option>
              ))}
            </select>
          ) : null}
          <img className="picture" src={el.image} />
        </div>
      ))}
      ;
    </div>
  );
}

export default MainContent;
