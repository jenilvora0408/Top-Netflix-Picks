import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";

// console.log(Sdata[2]);

// function ncard(val) {}

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series in 2022 </h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
          describe={val.description}
        />
      );
    })}
    ;
  </>,
  document.getElementById("root")
);
