import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Meds from './components/Meds';
import JAS from './components/JAS';
import Feedback from './components/Feedback';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/meds" component={Meds}/>
        <Route path="/feedback" component={Feedback}/>
        <Route path="/jas" component={JAS}/>
      </Router>
    );  
    }
 }

export default App;
