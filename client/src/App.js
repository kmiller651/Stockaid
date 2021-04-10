import React, { Component } from 'react';
import logo from './Logo.JPG';
import './App.css';
import Search from './components/search';
import Messagebox from './components/messagebox';
import Public from './components/public';
// import Login from './components/login';
// import Register from './components/register';
// import Analyze from './components/analyze';



class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      admin: false,
      page: ''
    }
  }

  componentDidMount() {
    this.setState({page:<Public />})
  }

  pageHandler = (pageClicked) => {
    // fetch(page)
    // .then(res => {this.setState({page:res})});
    this.setState({page:pageClicked});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">StockAid</h1>
          <div id='linkBar'>
            {/* <a onClick={ () => this.pageHandler()}>Home</a>
            <a onClick={ () => this.pageHandler(<Login />)}>Login</a>
            <a onClick={ () => this.pageHandler(<Search />)}>Stock Search</a>
            <a onClick={ () => this.pageHandler(<Register />)}>Register</a>
            <a onClick={ () => this.pageHandler(<Analyze />)}>Stock Analyzer</a> */}
          </div>
          <Messagebox />
        </header>
        <Search />
        <div className="pageBox">
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default App;
