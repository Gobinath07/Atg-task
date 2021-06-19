import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

import NewOne from './components/NewOne'
function App() {
  return (
    <Router>
    <div className="App">
  

        <Switch>


         <Route path="/" component={NewOne} exact />
         
       </Switch>
       </div>
    </Router >
  );
}

export default App;
