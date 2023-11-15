import React, { useState, useEffect } from 'react';
import './Header.css'; 
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForms';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setIsLoggedIn(true);
      setNickname(storedNickname);
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('nickname');
    localStorage.removeItem('user_id');

    // Update component state
    setIsLoggedIn(false);
    setNickname('');
  };

  return (
    <div>
      <header role="banner" className="header">
        <div>Logo</div>
        {isLoggedIn ? (
          <div>
            <p>{`${nickname}님 환영합니다!`}</p>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <button className="cd-signin" onClick={() => toggleModal()}>
              로그인
            </button>
            <button className="cd-signup" onClick={() => toggleModal()}>
              회원가입
            </button>
          </div>
        )}
      </header>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isLoginForm ? <LoginForm toggleForm={toggleForm} toggleModal={toggleModal} /> : <SignUpForm toggleForm={toggleForm} toggleModal={toggleModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;