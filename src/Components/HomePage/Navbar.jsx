import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';



const Navbar = () => {
  return (
    
    <div id="Nav">
      <h2> Les meilleures adresses de cirque en france </h2>
      <Link to="/"> Accueil </Link>
      <Link to="/form"> Ajouter un cirque </Link>
      <Link to="/list">List</Link>
    </div>
  )      
}

export default Navbar

