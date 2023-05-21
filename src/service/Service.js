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
    return this.client.post(
      `/findUserIdByManagerName?email=${email}&managerName=${managerName}`
    );
  }

  // 비밀번호 찾기
  async findPw(userId, email) {
    return this.client.post(
      `/setRandomPassword?userId=${userId}&email=${email}`
    );
  }

  // 회원가입 관련

  // 아이디 중복 확인
  async checkIdExist(userId) {
    return this.client.get(`/signup/checkId?userId=${userId}`);
  }

  // 이메일 인증
  async sendEmail(email) {
    return this.client.post(`/sendEmail?email=${email}`);
  }

  // 인증 번호 확인
  async confirmEmail(email, confirmNum) {
    return this.client.get(
      `/sendEmail/confirm?email=${email}&randomValue=${confirmNum}`
    );
  }

  // 회원가입
  async signup(formData) {
    return this.client.post('/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  //관리자

  async userList() {
    return this.client.post('/account/admin/users');
  }
}
