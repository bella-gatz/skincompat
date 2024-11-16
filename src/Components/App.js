import React from 'react';
import Accessibility from './accessibility'; 
import HomePage from './homepage';
import Calendar from './calendar';
import Compat from './compatibility';
import AboutUs from './about-us';
import Error from './error';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';

function App(props) {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  };

  return (
    <Router>
      <header>
        <div className="brand">
            <img src={process.env.PUBLIC_URL + '/img/glass-skin-img.jpg'} alt="Glass Skin" /> 
            <h1>Glass Skin</h1>  
        </div> 
        {/* nav bar */}
        <div id="myTopnav" className="topnav">
            <Link to="/">Home</Link>
            <Link to="/calendar">Skincare Calendar</Link>
            <Link to="/compatibility">Product Compatibility</Link>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/about-us">About Us</Link>
            {/* <a href="javascript:void(0);" className="icon" onClick={myFunction}>☰</a> */}
            <button className="icon" onClick={myFunction}>☰</button>
        </div>
      </header>
      <div>
        <Routes>
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/about-us" element ={<AboutUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/compatibility" element={<Compat />} />
          <Route index element={<HomePage />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>
            <p>© 2024 GlassSkin. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
