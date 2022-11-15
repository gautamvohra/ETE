import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props)=>{
    return <>
      <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.img} className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-tile">{props.title}</h5>
                    {/* <p className = "card-text">
                      Some quick element otext to build on the card
                    </p> */}
                    <NavLink to="" className="btn btn-primary">Enroll Now</NavLink >
                  </div>
                </div>
       </div>
    </>
}
export default Card;