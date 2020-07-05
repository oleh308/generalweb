import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../utils/config';

function Login({ setAuthorised }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    try {
      const data = {
        email,
        password
      }
      const response = (await axios.post(API_URL + '/api/auth/mentor/login', data)).data;
      Cookies.set('token', response.token);
      setAuthorised(true);
    } catch (error) {
      if (error.response) {
        console.log('Login - login:', error.response.data);
      } else {
        console.log('Login - login:', error.message);
      }
    }
  }

  return (
    <div className="sectionContainer">
      <h2 className="inputHeader">Email</h2>
      <input className="inputOne" value={email} onChange={e => setEmail(e.target.value)} />
      <h2 className="inputHeader">Password</h2>
      <input className="inputOne" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <div className="buttonsContainer">
        <button className="buttonOne" onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login;
