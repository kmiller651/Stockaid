import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './Logo.JPG';
import './App.css';
import Search from './components/search';
import Messagebox from './components/messagebox';
import Public from './components/public';
// import Login from './components/login';
// import Register from './components/register';
import Analyze from './components/analyze';



class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      admin: false,
      page: ''
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">StockAid</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/analyze">Analyze</NavLink></li>
            </ul>
            <Messagebox />
          </header><br />
          <div className="Content">
            <Route exact path="/" component={Search}/>
            <Route path="/analyze" component={Analyze}/>
          </div>
          <Public />
        </div>
      </HashRouter>
    );
  }
}

export default App;
