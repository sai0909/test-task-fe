// import the api endpoints
import { getUser, getAllUsers,getUserRepos } from '@/api/users.api'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    userDetail: [],
    userDetailRepo: []
  },
  getters: {
  },
  mutations: {
    UPDATE_USERS (state, data) {
      state.users = data
    },
    UPDATE_USER_DETAIL (state, data) {
      state.userDetail = data
    },
    UPDATE_USER_REPO (state, data) {
      state.userDetailRepo = data
    }
  },
  actions: {
    pullUsers ({ commit }) {
      return getAllUsers().then(response => {
        commit(
          'UPDATE_USERS',
          response.data
        )
      })
    },
    pullUserByName ({ commit }, name) {
      return getUser(name).then(response => { commit('UPDATE_USER_DETAIL', response.data)}).catch(error => console.log(error))
    },
    pullUserRepo ({commit}, name) {
      return getUserRepos(name).then(response => { commit('UPDATE_USER_REPO', response.data)}).catch(error => console.log(error))
    }
  },
  modules: {
  }
})
