import React, { Component } from 'react'
import './Header.css'
import logo from './images/d2.png'
import {NavLink} from 'react-router-dom'



export default class Header extends Component {
  state = {
    isBoxVisible:false
  };
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  
  
  render() {
    const { isBoxVisible } = this.state;
    return (
      <div className={`box ${isBoxVisible ? "open" : "hidden"}`}>
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle" onClick={this.toggleBox}>
            <i className="fa fa-bars"></i>
            <i className="fa fa-times"></i>
          </div>
          <a  className="logo"><NavLink to="/"><img src={logo}/></NavLink></a>
          <ul className="nav-list">
           {/* <li className="nav-item">
             
              <input type="text" className="search-input" placeholder="Search...."></input>
              <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
            </li> */}
          {/* <li className="nav-item">
          
                  <input type="text" className="search-input" placeholder="Search...."></input>
                  <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                    
            </li> */}
            <li className="nav-item"><NavLink to="/" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}>
            Home</NavLink>
            </li>
            <li className="nav-item dropdown"><NavLink to="/shop" exact className="nav-link" activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Our Shop</NavLink>
              
            </li>
            <li className="nav-item"><NavLink to="/login" exact className="nav-link" >
            Login</NavLink>
            </li>
            
            <li className="nav-item">
              <a href="#" className="nav-link"><i className="fa fa-heart"> </i></a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><i className="fa fa-shopping-cart"> </i></a>
            </li>

          </ul>
          </nav>

      </div>
      </div>
      {/* <div className={`box ${isMenuVisible ? "menu" : "hidden"}`}>
        <div className="menu-layer">
          <div className="menu-image-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav className="navi">
                  <ul className="uli">
                    <li className="lii">
                      <Link to="/shop"><a className="list">The Women Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link to="/shop1"><a className="list">The Men Collection</a></Link>
                    </li>
                    <li className="lii">
                      <Link to="/shop2"><a className="list">MakeUp</a></Link>
                    </li>
                    </ul>
                </nav>
              </div>
            </div>
          </div>
        </div> 
      </div>*/}
      </div>


      
    )
  }
}




