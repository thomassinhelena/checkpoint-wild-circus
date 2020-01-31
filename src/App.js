import React from 'react';
import Form from './Components/Form';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import CircusList from './Components/HomePage/CircusList';
import Navbar from './Components/HomePage/Navbar';
import Footer from './Components/Footer';

import './App.css';

const App = () => {      
  return (
      <div className="App" > 
        <Navbar />
        <Switch>      
          <Route exact path="/" component={HomePage} />
          <Route  path="/form" component={Form} />
          <Route  path="/list" component={CircusList} />
        </Switch> 
        <Footer />
      </div>
  );
}

export default App;
