import "./Login.css";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'


export default function LoginFunc (props) {
  let [authMode, setAuthMode] = useState("signin")
  const email = useRef()
  const password = useRef()

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleSubmit = ()=>{
    if (email.current.value == "test@gmail.com" && password.current.value == "1234") {
      localStorage.setItem("emailData","test@gmail.com")
      localStorage.setItem("passwordData","1234")

    }
  }


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container login">
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
                ref={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={password}
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
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
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
              type="email"
              className="form-control mt-1"
              placeholder="Full Name"
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
  )
}