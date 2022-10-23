import "./Login.css";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'


export default function LoginFunc (props) {
  let [authMode, setAuthMode] = useState("signin")
  const [password, setPassword] = useState()
  const email = useRef("")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleChange = (e)=>{

  }

  const handleSubmit = ()=>{
    console.log(email.current.value);


  }

  // const handleSubmit = ()=>{
  //   if (email.current.value == "test@gmail.com" && password.current.value == "1234") {
  //     localStorage.setItem("emailData","test@gmail.com")
  //     localStorage.setItem("passwordData","1234")

  //   }
  // }

  localStorage.setItem("name", "dalia")
const name = localStorage.getItem("name")
console.log(email.current);
return(
  <div className="d-flex ">
    <img className="w-75 mt-5" src="https://img.freepik.com/free-photo/3d-aesthetics-with-shapes-vaporwave-style_23-2148981118.jpg?w=900&t=st=1666480866~exp=1666481466~hmac=7071991ea9b3ed618a5fa5296d5e7ed2d5f6a7552a063c12e18e1d160ec070e5" alt="" />
  {authMode == "signin"?   <div className="Auth-form-container login">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                ref={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submit_btn">
              <Link to="/home">Submit</Link>
              </button>
            </div>

          </div>
        </form>
      </div>
    :
    <div className="Auth-form-container">
      <form className="Auth-form mt-5">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Full Name"
              name="fullName"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password again"
              />
            </div>
          <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password again"
              />
            </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary submit_btn">
              <Link to="/home">Submit</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
}
  </div>)
}