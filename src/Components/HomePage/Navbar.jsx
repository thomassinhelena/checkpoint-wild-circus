import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';



const Navbar = () => {
  return (
    
    <div id="Nav">
      <h2>Wild Circus</h2>
      <Link to="/Form">Ajouter un cirque</Link>
    </div>
  )      
}

export default Navbar

