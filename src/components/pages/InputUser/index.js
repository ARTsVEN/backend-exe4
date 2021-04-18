import React, { useState, useEffect } from "react";
import NavBar from '../../molecules/NavBar'
import Axios from 'axios';

const InputUser = ({ title, angka }) => {
  const [welcomeText, setWelcomeText] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
    
  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [welcomeText, email, first_name, last_name]);

//   const handleSubmit = () => {
//     setWelcomeText("");
//     const data = {
//       email: email,
//       password: password,
//     };
//     console.log(data);
//   };
  const addUser = () => {
    const data = {
        // avatar: "https://source.unsplash.com/random",
        email: email,
        first_name: first_name,
        last_name: last_name,
  }
Axios.post("http://localhost:3004/users", data);
console.log(data);
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
      <p className="form-label mt-3">First Name</p>
      <input
        className="form-control"
        placeholder="first name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p className="form-label mt-3">Last Name</p>
      <input
        className="form-control"
        placeholder="last name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={addUser} className="btn btn-primary">
        Sign In
      </button>
    </div>
    </div>
  );
};

export default InputUser;