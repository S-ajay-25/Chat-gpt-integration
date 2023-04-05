import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseData, setResponseData] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/messages', formData)
      .then(response => {
        setResponseData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Send message</button>
      </form>
      {responseData && (
        <div>
          <h2>Response data:</h2>
          <p>Name: {responseData.name}</p>
          <p>Email: {responseData.email}</p>
          <p>Message: {responseData.message}</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
