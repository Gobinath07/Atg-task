import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import NewOne from './components/NewOne'
function App() {
  return (
    <Router>
    <div className="App">
  

        <Switch>

         <Route path="/" component={Main} exact />
         <Route path="/newone" component={NewOne} exact />
         
       </Switch>
       </div>
    </Router >
  );
}

export default App;
