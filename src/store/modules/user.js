// 用户信息模块
export default {
  namespaced: true,
  state () {
    return {
    //  用户信息
      profile: {
        id: '',
        category: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
