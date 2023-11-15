// // controllers/mypageController.js

// const db = require('../db'); // db.js 파일에 데이터베이스 연결 설정이 들어있어야 합니다.
// const bcrypt = require('bcrypt');

// // 마이페이지 정보 조회
// exports.mypage = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await db.query('SELECT * FROM users WHERE username = ?', [username]);

//     if (user.length === 0) {
//       return res.status(401).json({ message: '로그인 실패' });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user[0].password);

//     if (!isPasswordMatch) {
//       return res.status(401).json({ message: '로그인 실패' });
//     }

//     res.status(200).json({
//       message: '로그인 성공',
//       username: user[0].username,
//       nickname: user[0].nickname,
//     });
//   } catch (error) {
//     console.error('로그인 중 오류 발생:', error);
//     res.status(500).json({ message: '로그인 중 오류 발생' });
//   }
// };
