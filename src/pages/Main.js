import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import Home from './Home';
import Cookies from 'js-cookie';
import Authorise from './Authorise';

function Main() {
  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) setAuthorised(true);
  }, []);

  return authorised ?
    <Home setAuthorised={setAuthorised} /> :
    <Authorise setAuthorised={setAuthorised} />
}

export default Main;
