import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import '../../../../style/css/login.css'
import { User } from "../../../interface/user";
type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<User>();

    const onSubmit : SubmitHandler<User> =async (user) => {
        try {
          const {data} =  await axios.post(`http://localhost:3001/signup`,user)
          alert("Bạn đã đăng kí thành công !!!")
          navigate('/login')
        } catch (error) {
        }
    }
  return (
    <div className='bodyRegister'>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
      <Link to='/'><h6>Back</h6> </Link>
          
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type="text" placeholder="Name" {...register('userName',{required:true,minLength:6})}/>
            {errors.userName && errors.userName.type === "required" && <span style={{color: 'red'}}>Vui lòng nhập userName</span>}
            {errors.userName && errors.userName.type === "minLength" && <span  style={{color: 'red'}}>Vui lòng nhập tối thiểu 6 kí tự</span>}
            <input type="email" placeholder="Email"  {...register('email',{required:true})} />
            {errors.userName && errors.userName.type === "required" && <span style={{color: 'red'}}>Vui lòng nhập email</span>}

            <input type="password" placeholder="Password"  {...register('password',{required:true})} />
            {errors.userName && errors.userName.type === "required" && <span style={{color: 'red',marginBottom:"10px"}}>Vui lòng nhập password</span>}

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
