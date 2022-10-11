'use strict';

const UserStorages = require('../../models/UserStorage');
const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

// object로 export
module.exports = {
  output,
  process,
};

// 위와 같음
// module.exports = {
//     hello: hello,
//     login: login,
// };
