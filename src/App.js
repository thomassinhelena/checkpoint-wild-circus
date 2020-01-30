import React from 'react';
import Form from './Components/Form';
import CardMap from './Components/CardMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {      
  return (
    <Router>
      <div className="App" >        
        <Switch>
          <Route exact path="/" component={CardMap} />
          <Route path="Form" component={Form} />       
        </Switch>
        <CardMap />
        <Form />
      </div>
    </Router>
  );
}

export default App;
