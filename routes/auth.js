const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../db/db').pool;
const selectUser = require('../db/db').selectUser;



// ログインページの表示
router.get('/', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

// ログインの処理
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // データベースクエリの実行
  pool.query(selectUser, [username, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send('認証に失敗しました。');
    } else {
      if (result.rowCount > 0) {
        res.redirect('/dashboard');
      } else {
        res.send('認証に失敗しました。');
      }
    }
  });
});

// ダッシュボードページの表示
router.get('/dashboard', (req, res) => {
  res.sendFile('dashboard.html', { root: './views' });
});

module.exports = router;
