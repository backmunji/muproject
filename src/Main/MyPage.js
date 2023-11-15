// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Mypage = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/mypage');
//         setUserInfo(response.data);
//       } catch (error) {
//         console.error('사용자 정보를 가져오는 중 오류 발생:', error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   const editNickname = async () => {
//     const newNickname = prompt('새로운 닉네임을 입력하세요:');
//     if (newNickname !== null && newNickname !== '') {
//       try {
//         await axios.put('/api/update-nickname', { newNickname });

//         // 닉네임 업데이트가 성공하면 새로고침
//         window.location.reload();
//       } catch (error) {
//         console.error('닉네임 업데이트 중 오류 발생:', error);
//       }
//     }
//   };

//   const editPassword = async () => {
//     const newPassword = prompt('새로운 비밀번호를 입력하세요:');
//     if (newPassword !== null && newPassword !== '') {
//       try {
//         await axios.put('/api/update-password', { newPassword });

//         // 비밀번호 업데이트가 성공하면 새로고침
//         window.location.reload();
//       } catch (error) {
//         console.error('비밀번호 업데이트 중 오류 발생:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       {userInfo ? (
//         <div>
//           <h1>환영합니다, {userInfo.nickname}님!</h1>
//           <p>현재 닉네임: {userInfo.nickname}</p>
//           <p>현재 비밀번호: ********</p>
//           <button onClick={editNickname}>닉네임 수정</button>
//           <button onClick={editPassword}>비밀번호 수정</button>
//         </div>
//       ) : (
//         <p>사용자 정보를 불러오는 중...</p>
//       )}
//     </div>
//   );
// };

// export default Mypage;
