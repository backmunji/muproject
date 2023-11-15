import React, { useEffect } from 'react';

const Mypage = () => {
  useEffect(() => {
    if (localStorage.getItem('username') === null) {
      window.location.replace('http://localhost:3000/');
    }
  }, []);

  return (
    <div>
      <p style={{ fontSize: 30, fontFamily: 'KyoboHand' }}>{localStorage.getItem('nickname')} 님 어서오세요!</p>
    </div>
  );
};

export default Mypage;
