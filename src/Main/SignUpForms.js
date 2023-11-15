// SignUpForms.js

import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForms.css'; // SignUpForm에 대한 스타일 파일을 불러옵니다.

const SignUpForm = ({ toggleForm, toggleModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3003/api/signup', {
        username,
        password,
        nickname,
      });

      if (response.status === 201) {
        console.log(response.data.message); // 회원가입 성공 메시지
      } else {
        console.error('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return (
    <div id="cd-signup">
      <form className="cd-form">
        <p className="fieldset">
          <label className="image-replace cd-username" htmlFor="signup-username">아이디</label>
          <input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="username"
            value={username} onChange={(e) => setUsername(e.target.value)} required />
        </p>
        <p className="fieldset">
          <label className="image-replace cd-nickname" htmlFor="signup-nickname">닉네임</label>
          <input className="full-width has-padding has-border" id="signup-nickname" type="text" placeholder="Nickname"
            value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </p>
        <p className="fieldset">
          <label className="image-replace cd-password" htmlFor="signup-password">비밀번호</label>
          <input className="full-width has-padding has-border" id="signup-password" type="password" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </p>
        <p className="fieldset">
          <input className="full-width has-padding" type="submit" value="Create account" onClick={handleSignUp} />
        </p>
      </form>
      <p className="cd-form-bottom-message">
        <button onClick={toggleForm}>로그인 페이지로</button>
        <button onClick={toggleModal}>창 닫기</button>
      </p>
    </div>
  );
};

export default SignUpForm;
