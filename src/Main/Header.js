import React, { useState } from 'react';
import './Header.css'; 
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForms';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  
  return (
    <div>
      <header role="banner" className="header"> {/* 스타일 클래스를 적용합니다. */}
        {/* Header 내용 */}
        <div>Logo</div>
        <div>
          <button className="cd-signin" onClick={() => toggleModal()}>
            로그인
          </button>
          <button className="cd-signup" onClick={() => toggleModal()}>
            회원가입
          </button>
        </div>
      </header>

      {/* 모달 */}
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