import React, {useState} from 'react'
import firebase from '../../../config/Firebase';
import {useHistory} from "react-router-dom";

const Register2 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    let history = useHistory();

    const onSubmit = () => {

        const data = {
            email: email,
            fullName: fullName,
        }

  firebase
  .auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    //simpan ke realtime database
    const userID = userCredential.user.uid;
    firebase
    .database()
    .ref('users/' + userID)
    .set(data);

    setFullName("");
    setEmail("");
    setPassword("");    
    //redirect ke halaman login
    history.push("/login");
  })
  .catch((error) => {
    console.log(error);
    //tampilkan pesan error 
  });
    };

    return (
        <div className ="container mt-5">
        <p className="form-label mt-4">Nama Lengkap</p>
      <input
        className="form-control"
        placeholder="Masukan nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
        <p className="form-label mt-3">Email</p>
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
      <button type="button" onClick={onSubmit} className="btn btn-primary">
        Register new user
      </button>
        </div>
    )
}

export default Register2;
