import React, { useState } from 'react';
import './Header.css';
import axios from 'axios';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
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

    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3003/api/login', {
          username: username,
          password: password,
        });
  
        console.log(response.data.message);
        console.log('로그인 완료');
      } catch (error) {
        console.error('로그인 에러:', error);
      }
    };
  
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const toggleForm = () => {
      setIsLoginForm(!isLoginForm);
    };
  
  const handleSubmit = {

  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const modalStyles = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
  };

  const modalContentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
  };

  const buttonStyles = {
    padding: '8px 16px',
    backgroundColor: 'skyblue',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft : '10px'
  };
  const formContent = isLoginForm ? (
    <div id="cd-login">
      <form className="cd-form">
        <p className="fieldset">
          <label className="image-replace cd-email" htmlFor="signin-email">아이디</label>
          <input className="full-width has-padding has-border" id="signin-email" type="text" placeholder="username" required 
          value={username} onChange={(e) => setUsername(e.target.value)}/>
        </p>
        <p className="fieldset">
          <label className="image-replace cd-password" htmlFor="signin-password">비밀번호</label>
          <input className="full-width has-padding has-border" id="signin-password" type="password" placeholder="Password" required
          value={password} onChange={(e) => setPassword(e.target.value)} />
        </p>        
        <p className="fieldset">
          <input className="full-width" type="submit" value="Login" 
          onClick={handleLogin}/>
        </p>
      </form>
      <p className="cd-form-bottom-message">
        <button onClick={toggleForm}>회원가입</button>
        <button onClick={toggleModal}>창 닫기</button>
      </p>
    </div>
  ) : (
    <div id="cd-signup">
      <form className="cd-form">
        <p className="fieldset">
          <label className="image-replace cd-username" htmlFor="signup-username">아이디</label>
          <input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="username"
          value={username} onChange={(e) => setUsername(e.target.value)} required />
        </p>
        <p className="fieldset">
          <label className="image-replace cd-email" htmlFor="signup-email">닉네임</label>
          <input className="full-width has-padding has-border" id="signin-email" type="text" placeholder="Nickname"
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

  

  return (
    <div>
      <header role="banner" style={headerStyles}>
        {/* Header 내용 */}
        <div>Logo</div>
        <div>
          <button className="cd-signin" style={buttonStyles} onClick={toggleModal}>
            로그인
          </button>
          <button className="cd-signup" style={buttonStyles} onClick={toggleModal}>
            회원가입
          </button>
        </div>
      </header>

      <div style={modalStyles} onClick={toggleModal}>
        <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
          {formContent}
        </div>
      </div>
    </div>
  );
};

export default Header;
