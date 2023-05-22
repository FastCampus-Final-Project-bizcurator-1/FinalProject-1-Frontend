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
