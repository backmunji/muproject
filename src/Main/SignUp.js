import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignUp = async () => {
    try {
      console.log(username,password,nickname);
      // axios를 사용한 서버로 데이터 전송
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
    <div>
      <h2>회원가입</h2>
      id:<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      pw:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      nickname:<input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <br/><br/>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default SignUp;
