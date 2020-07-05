import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

function Signup({ goBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  async function signup() {
    try {
      if (password !== password2) return alert("Password don't match");
      const data = {
        name,
        surname,
        email,
        password
      }
      const response = (await axios.post(API_URL + '/api/auth/mentor/signup', data)).data;
      console.log(response)
      goBack();
    } catch (error) {
      if (error.response) {
        console.log('Signup - signup:', error.response.data);
      } else {
        console.log('Signup - signup:', error.message);
      }
    }
  }

  return (
    <div className="sectionContainer">
      <h2 className="inputHeader">Name</h2>
      <input className="inputOne" value={name} onChange={e => setName(e.target.value)} />
      <h2 className="inputHeader">Surname</h2>
      <input className="inputOne" value={surname} onChange={e => setSurname(e.target.value)} />
      <h2 className="inputHeader">Email</h2>
      <input className="inputOne" value={email} onChange={e => setEmail(e.target.value)} />
      <h2 className="inputHeader">Password</h2>
      <input className="inputOne" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <h2 className="inputHeader">Confirm Password</h2>
      <input className="inputOne" type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
      <div className="buttonsContainer">
        <button className="buttonOne" onClick={signup}>Sign up</button>
      </div>
    </div>
  )
}

export default Signup;
