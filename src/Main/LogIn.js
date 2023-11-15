import React, { useState } from 'react';
import axios from 'axios';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // 서버로 사용자 인증 요청을 보냅니다.
      const response = await axios.post('http://localhost:3003/api/login', {
        username: username,
        password: password,
      });

      const { success, message, user } = response.data;

      if (success) {
        // 인증이 성공하면 사용자 정보를 저장합니다.
        const { nickname } = user;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('nickname', nickname);

        // 로그인 성공 메시지를 출력합니다.
        console.log(message);
      } else {
        // 인증 실패 시 에러 메시지를 설정합니다.
        setError(message);
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  const handleRegister = () => {
    // 회원가입 페이지로 이동합니다.
    window.location.href = '/signup';
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
      {/* 에러 메시지를 표시합니다. */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      {/* 로그인 및 회원가입 버튼 */}
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleRegister}>회원가입</button>
    </div>
  );
};

export default LogIn;
