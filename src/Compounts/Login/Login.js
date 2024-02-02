import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://fakeapi.platzi.com/en/rest/auth-jwt', {
        email,
        password
      });

      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        setResponseMessage('Login successful!');
        
      } else {
        setResponseMessage(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while logging in.');
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <div>{responseMessage}</div>
    </div>
  );
}

export default Login;