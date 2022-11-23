import React from "react";
import { Link } from "react-router-dom";
import '../../../../style/css/login.css'
type Props = {};

const Register = (props: Props) => {
    
  return (
    <div className='bodyRegister'>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
      <Link to='/'><h6>Back</h6> </Link>
          
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
       
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to='/login'>
              <button className="ghost" id="signUp">
                Sign In
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
