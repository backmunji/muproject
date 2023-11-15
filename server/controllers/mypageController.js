//  const db = require('../db.js');

// exports.mypg = (req, res) => {
//   const { username, password } = req.body;

//   db.query(
//     'SELECT user_id, username, nickname, money, coin1, coin2, coin3 FROM users WHERE username = ? AND password = ?',
//     [username, password],
//     (err, result) => {
//       if (err) {
//         console.error('로그인 오류:', err);
//         return res.status(500).json({ message: '로그인 오류' });
//       }

//       if (result.length === 0) {
//         return res.status(401).json({ message: '로그인 실패' });
//       }

//       const user = result[0];
//       const { user_id, username, nickname, money, coin1, coin2, coin3 } = user;

//       res.status(200).json({ message: '로그인 성공', user_id, username, nickname, money, coin1, coin2, coin3 });
//     }
//   );
// };
