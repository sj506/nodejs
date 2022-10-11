'use strict';

class UserStorages {
  // public 변수에서 private한 변수로 은닉화
  static #users = {
    id: ['test1', 'test2', 'test3'],
    psword: ['1234', '123456', '123456789'],
    name: ['원', '투', '쓰리'],
  };

  static getUsers(...fields) {
    // 은닉화 한 데이터에 직접 접근하지 않고 이렇게 메소드를 만들어서 접근해야함
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorages;
