const db = require('../db.js');

exports.signup = (req, res) => {
  const { username, password, nickname } = req.body;
  console.log({ username, password, nickname });

  // 간단한 비밀번호 검증 로직 (실제로는 더 강력한 방법을 사용해야 함)
  if (!username || !password || !nickname) {
    return res.status(400).json({ message: '입력이 부족합니다.' });
  }

  // 회원가입 정보를 DB에 삽입
  db.query(
    'INSERT INTO users (username, password, nickname) VALUES (?, ?, ?)',
    [username, password, nickname],
    (err, result) => {
      if (err) {
        console.error('회원가입 오류:', err);
        return res.status(500).json({ message: '회원가입 오류' });
      }

      res.status(201).json({ message: '회원가입 성공' });
    }
  );
};