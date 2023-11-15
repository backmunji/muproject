import React, { useState } from 'react';
import axios from 'axios';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3003/api/login', {
        username: username,
        password: password,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };


  return (
    <div>
      <h2>로그인</h2>
      <label>
        ID:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        PW:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleLogin}>회원가입</button>
    </div>
  );
};

export default LogIn;
