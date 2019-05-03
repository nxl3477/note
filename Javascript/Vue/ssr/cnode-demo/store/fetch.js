export const state = () => ({
  posts: null
})

export const getters = {
  getPosts (state) {
    return state.posts
  }
}
export const mutations = {
  setPosts (state, data) {
    state.posts = data
  }
}