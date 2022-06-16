import React from "react";
import Images from "./Images";
import './index.css'

function Card(props) {
    // console.log(props);
    return (
      <>
        <div className="cards">
          <div className="card">
            <Images imgsrc={props.imgsrc} />
            <div className="card__info">
              <span className="card__category"> {props.title} </span>
              <h3 className="card__title"> {props.sname} </h3>
              <p className="description"> {props.describe} </p>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
                
              </a>
              
            </div>
          </div>
        </div>
      </>
    );
  }

export default Card;