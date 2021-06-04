import React,{useEffect, useRef} from 'react'
import {Link,NavLink} from "react-router-dom"
import './Login.css'
import gsap from 'gsap'

const Login = ()=> {
  let line1= useRef(null);
  let line2= useRef(null);
  let form= useRef(null);

  useEffect(()=>{
    gsap.from([line1,line2],0.8,{
      delay:0.8,
      ease:"power3.out",
      y:64,
      stagger:{
        amount:0.15
      }
    })
    gsap.from(form,1,{
      delay:1.3,
      ease:"power3.out",
      x:1000,
      stagger:{
        amount:0.15
      }
    })
  },[line1,line2])





  

  return (
    <div className="inner">
      <div className="headerr">
      <NavLink className="head" to="/" exact>Home</NavLink>
      <NavLink className="head" to="/login" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>Login</NavLink>
      <NavLink className="head" to="/signIn" exact activeStyle={{fontWeight:"bold",color:"#fada5f"}}>SignUp</NavLink>
    </div>
    <div className="container1">
      <div className="page1">
    
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={el => line1 = el} className="line ">
          Hello, New here ?
        </div>
      </div>
      <div className="line-wrap">
        <div ref={el => line2 = el} className="line line2">
          Join Us Now.
        </div>
      </div>
    </h1>
   

    </div>
    <div>
      <div ref={el => form = el} className="info1">
        <div class="login-form">
     
     <div class="form-group ">
       <input type="text" class="form-control" placeholder="Username " id="UserName" />
       
     </div>
     <div class="form-group log-status">
       <input type="password" class="form-control" placeholder="Password" id="Password"/>
       
     </div>
      
      <a class="link" href="#">Lost your password?</a>
     <button type="button" class="log-btn" >Log in</button>
     
    
   </div>


      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
