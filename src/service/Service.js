import axios from 'axios';

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://52.78.88.121:8080/',
      headers: {},
    });
  }

  // 로그인 관련

  // 로그인
  async login(userId, password) {
    return this.client.post('/login', {
      userId,
      password,
    });
  }

  // 아이디 찾기
  async findId(email, managerName) {
    return this.client.post('/findUserIdByManagerName', {
      params: {
        email,
        managerName,
      },
    });
  }

  // 비밀번호 찾기
  async findPw(userId, email) {
    return this.client.post('/setRandomPassword', {
      params: {
        userId,
        email,
      },
    });
  }

  // 회원가입 관련

  // 아이디 중복 확인
  async checkIdExist(userId) {
    return this.client.get(
      `http://52.78.88.121:8080/signup/checkId?userId=${userId}`
    );
  }

  // 이메일 인증
  async sendEmail(email) {
    return this.client.post(
      `http://52.78.88.121:8080/sendEmail?email=${email}`
    );
  }

  // 인증 번호 확인
  async confirmEmail(email, confirmNum) {
    return this.client.get(
      `http://52.78.88.121:8080/sendEmail/confirm?email=${email}&randomValue=${confirmNum}`
    );
  }

  //관리자

  async userList() {
    return this.client.post('/account/admin/users');
  }
}
