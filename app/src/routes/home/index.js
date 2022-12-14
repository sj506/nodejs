'use strict';

const express = require('express');
const router = express.Router();

// 컨트롤러 import
const ctrl = require('./home.ctrl');

// 라우팅
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);

module.exports = router;
