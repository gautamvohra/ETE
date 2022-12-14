import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Navbar from "./Navbar";
import About  from './About';
import Contact from './Contact';
import Footer from "./Footer";
import Service from './Service';
import {Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
         <Route exact path = "/" element={<Home/>}/>
         <Route exact path = "/about" element={<About/>}/>
        <Route exact path = "/service" element={<Service/>}/>
        <Route exact path = "/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      {/* <div className="Footer">
      <p>2022 Web Technical. All Rights Reserved | Terms and Conditons.</p>
      </div> */}
    </>
  );
};
export default App;