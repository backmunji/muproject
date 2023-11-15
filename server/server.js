const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const signupRouter = require('./routes/signup');
app.use('/api/signup', signupRouter);
const loginRouter = require('./routes/login'); 
app.use('/api/login', loginRouter); 

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});