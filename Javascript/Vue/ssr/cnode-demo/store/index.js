export const state = () => ({
  userInfo: 0
})

export const getters = {
  getUserInfo (state) {
    return state.userInfo
  }
}
export const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  }
}