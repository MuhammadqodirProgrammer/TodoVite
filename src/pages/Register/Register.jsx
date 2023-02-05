import axios from "axios";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContex";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const {setToken} = useContext(AuthContext);
  const {setUser} = useContext(UserContext);
const navigate = useNavigate()

  const emailRef = useRef();
  const FirstNameRef = useRef();
  const LastNameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:7070/register", {
        first_name:FirstNameRef.current.value,
        last_name:LastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
  if(data.status === 201){
    setToken(data.data.accessToken)
    setUser(data.data.user)
    navigate('/')
  };
      })
      .catch((err = console.log(err)));
  
  };
  return (
    <div className="w-50 mx-auto my-5 p-5 shadow">
      <h1 className="text-center my-3">Register</h1>
      <form onSubmit={handleSubmit}>
      <input
          ref={FirstNameRef}
          className="form-control my-3"
          type="text"
          placeholder="First Name"
        />
         <input
          ref={LastNameRef}
          className="form-control my-3"
          type="text"
          placeholder="Last Name"
        />
        <input
          ref={emailRef}
          className="form-control my-3"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="form-control my-3"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary " type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Register;
