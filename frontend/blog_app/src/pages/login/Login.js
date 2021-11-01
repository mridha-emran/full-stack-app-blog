import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"

import './login.css';


function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit= async(e)=>{
    e.preventDefault()
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(" http://localhost:8000/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }

  }
    return (
      <div className="login">
         <span className="loginTitle">Login</span>
        <from className="loginForm" onsubmit={handleSubmit}>
          <label>email</label>
          <input type="text" placeholder="enter your email" ref={userRef}/>
       
          <label>password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
    
        <button className="loginButton" type="submit">Login</button>
        </from>
        <button className="loginRegisterButton">Register</button>
        
      </div>
    );
  }
  
  export default Login;