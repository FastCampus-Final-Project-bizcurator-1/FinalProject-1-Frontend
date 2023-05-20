import axios from 'axios';

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://52.78.88.121:8080/',
      headers: {},
    });
  }

  // 로그인 관련console.log()
  async login(userId, password) {
    return this.client.post('/login', {
      userId,
      password,
    });
  }

  async findId(email, managerName) {
    return this.client.post('/findUserIdByManagerName', {
      params: {
        email,
        managerName,
      },
    });
  }

  async findPw(userId, email) {
    return this.client.post('/setRandomPassword', {
      params: {
        userId,
        email,
      },
    });
  }

  //관리자

  async userList() {
    return this.client.post('/account/admin/users');
  }
}
