import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../utils/config';

function AddPost() {
  const token = Cookies.get('token');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function create() {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('content', content);
      data.append('hashtags[]', 'Marketing');

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = (await axios.post(API_URL + '/api/posts', data, config)).data;
      console.log(response);
      alert('Success');
    } catch (error) {
      if (error.response) {
        console.log('AddPost - create:', error.response.data);
      } else {
        console.log('AddPost - create:', error.message);
      }
    }
  }

  return (
    <div className="sectionContainer">
      <h2 className="inputHeader">Title</h2>
      <input className="inputOne" value={title} onChange={e => setTitle(e.target.value)} />
      <h2 className="inputHeader">Content</h2>
      <textarea className="textOne" value={content} onChange={e => setContent(e.target.value)} />
      <div className="buttonsContainer">
        <button className="buttonOne" onClick={create}>Create</button>
      </div>
    </div>
  )
}

export default AddPost
