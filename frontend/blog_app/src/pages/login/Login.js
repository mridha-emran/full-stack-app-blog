import './login.css';

function Login() {
    return (
      <div className="login">
         <span className="loginTitle">Login</span>
        <from className="loginForm">
          <label>email</label>
          <input type="text" placeholder="enter your email" />
          <label>password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        </from>
        <button className="loginRegisterButton">Register</button>
        
      </div>
    );
  }
  
  export default Login;