
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



import HomePage from './HomePage';
import ShopWomen from './ShopWomen';
import ShopMen from './ShopMen';
import ShopMakeup from './ShopMakeup';
import Menu from './Menu';
import Header from './Header';
import Top from './Top'; 

import Login from './Login'
import SignUp from './SignUp';


import LoginPage from './LoginPage';

import ProductPage from './ProductPage'
import Cart from './Cart'
import ProductPage1 from './ProductPage1';



function App() {
  return (
    <div className="app">


      <Router>
        <Switch>
        <Route path="/Shop">
            <Menu/>
          </Route>
          <Route path="/productPage/:id" component={ProductPage1} />
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/signIn" >
            <SignUp/>
          </Route>
          <Route path="/shop1">
            <ShopMen/>
          </Route>
          <Route path="/shop2">
          <ShopMakeup/>
          </Route>
          <Route path="/shop3">
          <ShopWomen />
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
