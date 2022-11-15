import React from "react";
import Card from './Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Data } from "./Data";
const Service = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Our Services</h1>
      </div>
      <article className="list">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
               {
                 Data.map((val)=>{
                   const {id,img,title} = val;
                   return (
                       <Card key ={id} img ={img} title = {title}/>
                   );
                 })
               };
            </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default Service;