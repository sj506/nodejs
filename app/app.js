'use strict';

// 모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
//기본 주소값을 public으로 만들기

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함 될 경우 제대로 인식되지 않는 문제 해결

// 미들웨어 등록 메서드
app.use('/', home);

module.exports = app;
