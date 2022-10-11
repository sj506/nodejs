'use strict';

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
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
