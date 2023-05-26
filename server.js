const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

// ミドルウェアの設定
app.use(express.urlencoded({ extended: false }));
app.use(express.static('views'));

// ルートの設定
app.use('/', authRoutes);

// サーバーの起動
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
