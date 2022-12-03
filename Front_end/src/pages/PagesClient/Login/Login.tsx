import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../../style/css/login.css";
import { User } from "../../../interface/user";
type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const {data} = await axios.post(`http://localhost:3001/signin`,{email,password})
      localStorage.setItem('accessToken',JSON.stringify(data.accessToken));
      // console.log(localStorage.setItem('accessToken',data.accessToken))
      navigate('/')
    } catch (error) {
    }
  }
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhhZDg4YTdiM2JiNWEzNTdiZTJlNzgiLCJpYXQiOjE2NzAwNDUxNTJ9.yL3452N0wTeKlGTM0RBs13L2C0xrEWrEBV2vT7yEIQg"
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     email: email,
  //     password: password,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:3001/signin", requestOptions)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       localStorage.setItem('accessToken',result.accessToken);
  //       alert('Thành công')
  //       navigate('/')
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       alert("wrong");
  //     });
  // };

  useEffect(() => {
    if (localStorage.getItem("inforUser")) {
      // navigate('/')
    }
  }, []);
  return (
    <div className="bodyLogin">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <Link to="/">
            <h6>Back</h6>{" "}
          </Link>
          <form action="#">
            <h1>Sign in</h1>
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
            <span>or use your account</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button onClick={login}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Link to="/register">
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
