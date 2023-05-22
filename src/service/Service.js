import axios from 'axios';

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://52.78.88.121:8080/',
      headers: {},
    });
  }

  setAuthToken(accessToken) {
    this.client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

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

  // *** 관리자 ***

  /**
   * 사용자 정보를 가져오는 API
   * @param {page} page - 보여줄 페이지
   * @returns {Object} - 전체 유저 리스트
   */
  async userListRoleAll(page) {
    return this.client.get('/account/admin/users', {
      page,
      size: 15,
      sort: 'id',
    });
  }

  /**
   * 반려 유저 정보를 가져오는 API
   * @param {page} page - 보여줄 페이지
   * @returns {Object} - 반려 유저 리스트
   */
  async userListRoleRefuse(page) {
    return this.client.get('/account/admin/users/getRoleRefuse', {
      page,
      size: 15,
      sort: 'id',
    });
  }

  async userListRoleStandBy(page) {
    return this.client.get('/account/admin/users/getRoleStandby', {
      page,
      size: 15,
      sort: 'id',
    });
  }

  async userListRoleUser(page) {
    return this.client.get('/account/admin/users/getRoleUser', {
      page,
      size: 15,
      sort: 'id',
    });
  }

  // *** role별 회원수 조회 ***

  async getUserCount(content) {
    return this.client.get(`/account/admin/users/getUserCount/${content}`);
  }

  // *** 회원 권한 설정 ***

  /**
   * 유저 반려 API
   */
  async roleChangeRefuse(userId) {
    return this.client.post(`/account/admin/users/roleRefuse/${userId}`);
  }

  // //승인대기 ??????????????????????
  // async roleChangeStandby(userId) {
  //   return this.client.post(`/account/admin/users/roleStandby/${userId}`);
  // }

  /**
   * 유저 승인 API
   */
  async roleChangeUser(userId) {
    return this.client.post(`/account/admin/users/roleUser/${userId}`);
  }
}
