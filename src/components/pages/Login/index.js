import React, { useState, useEffect } from "react";
import NavBar from '../../molecules/NavBar'
import firebase from '../../../config/Firebase'
import {useHistory} from "react-router-dom";

const Login = ({ title, angka }) => {
  const [welcomeText, setWelcomeText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
    
  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [welcomeText, email, password]);

  const handleSubmit = () => {
    setWelcomeText("");
    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => history.push("/"))
    .catch((error)=> console.log("Error!",error))
  };

  return (
    //JSX
    <div>
        <NavBar />
    <div className="container mt-5">
       
      <h3>{welcomeText}</h3>
      <h3>
        {title} {angka}
      </h3>
      <p className="form-label mt-5">Email</p>
      <input
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Password</p>
      <input
        className="form-control"
        placeholder="Masukan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Sign In
      </button>
    </div>
    </div>
  );
};

export default Login;