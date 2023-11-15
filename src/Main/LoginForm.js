// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // LoginForm에 대한 스타일 파일을 불러옵니다.

const LoginForm = ({ toggleForm, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios.post('http://localhost:3003/api/login', { username, password })
      .then((response) => {
        const data = response.data;
        if (response.data.message === '로그인 성공') {
          localStorage.setItem('username', data.username);
          localStorage.setItem('nickname', data.nickname);
          localStorage.setItem('user_id', data.user_id);
          alert('로그인 성공');
        } else {
          alert('로그인 실패');
        }
      })
      .catch((error) => {
        console.error('로그인 오류:', error);
        alert('로그인 실패.');
      });
  };

  return (
    <div id="cd-login">
      <form className="cd-form">
        <p className="fieldset">
          <label className="image-replace cd-email" htmlFor="signin-email">아이디</label>
          <input className="full-width has-padding has-border" id="signin-email" type="text" placeholder="username" required
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p className="fieldset">
          <label className="image-replace cd-password" htmlFor="signin-password">비밀번호</label>
          <input className="full-width has-padding has-border" id="signin-password" type="password" placeholder="Password" required
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </p>
        <p className="fieldset">
          <input className="full-width" type="submit" value="Login" onClick={handleLogin} />
        </p>
      </form>
      <p className="cd-form-bottom-message">
        <button onClick={toggleForm}>회원가입</button>
        <button onClick={toggleModal}>창 닫기</button>
      </p>
    </div>
  );
};

export default LoginForm;
