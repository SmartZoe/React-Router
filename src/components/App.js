import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import My404 from './My404';
import OtherProducts from './OtherProducts';


class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <main>
      <Switch>
      <Route exact path='/home' component={Home} />
      <Route path='/productlist' component={ProductList} />
      <Route path='/productId' component={Product} />
      <Route path='/OtherProducts' component={OtherProducts} />
      <Route path='/*' component={My404} />

      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <p className="App-intro">
  
          <h3><b>Introduction to REACT Router</b></h3>
        </p>
        </Switch>
      </main>
      </div>
     
    );
  }
}

export default App;
