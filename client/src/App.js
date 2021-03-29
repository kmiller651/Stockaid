import React, { Component } from 'react';
import logo from './Logo.JPG';
import './App.css';
import Search from './components/search';
import Messagebox from './components/messagebox';
import Public from './components/public';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      admin: false,
      page: []
    }
  }

  componentDidMount() {
    this.setState({page:<Public />})
  }

  // pageHandler = (page) => {
  //   fetch(page)
  //   .then(res => res.json())
  //   .then(data, () => {this.setState({page:data})})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">StockAid</h1>
          <div id='linkBar'>
            <a href='/home'>Home</a>
            <a href='/login'>Login</a>
            <a href='/searchStocks'>Stock Search</a>
            <a href='/register'>Register</a>
            <a href='/analyze'>Stock Analyzer</a>
          </div>
          <Messagebox />
        </header>
        <Search />
        <div className="contentBox">
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default App;
