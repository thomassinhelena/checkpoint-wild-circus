import React from 'react';
import Form from './Components/Form';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/HomePage/Navbar';
import Footer from './Components/Footer';
import CircusList from './Components/HomePage/CircusList';
import './App.css';

const App = () => {      
  return (
      <div className="App" > 
        <Navbar />
        <Switch>      
          <Route exact path="/" component={HomePage} />
          <Route  path="form" component={Form} />               
        <Form />
        <CircusList />
        </Switch> 
        <Footer />
      </div>
  );
}

export default App;
