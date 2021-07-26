const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4500;
const { User } = require('./models/User');
const config = require('./config/key');

// 미들웨어 (bodyparser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongoDB connected'))
  .catch((err) => console.log(err));

// 로그인 route
app.get('/', (req, res) => {
  res.send('login page');
});

// 회원가입 route
app.post('/register', (req, res) => {
  // 회원가입 form정보 가져오기
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server start on port : ${PORT}`);
});
