import React from 'react';
import Form from './Components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css';

const App = () => {      
  return (
    <Router>
      <div className="App" >        
        <Switch>
          <Route exact path="Form" component={Form} />       
        </Switch>
        <Navbar />
        <Form />
      </div>
    </Router>
  );
}

export default App;
