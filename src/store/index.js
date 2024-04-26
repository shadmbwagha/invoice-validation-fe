import { createStore } from 'vuex';

export default createStore({
  state: {
    authToken: localStorage.getItem('authToken'),
    id: localStorage.getItem('id'),
    userRoles: localStorage.getItem('userRoles')|| [],
    user: localStorage.getItem('user')
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    },
    setUserRoles(state, roles) {
      state.userRoles = roles;
    },
    setUser(state, user) {
        state.user= user;
    },
    setId(state, id) {
      state.id= id;
    }
  },
  actions: {
    login({ commit }, { authToken, roles, user, id }) {
      commit('setAuthToken', authToken);
      commit('setUserRoles', roles);
      commit('setUser', user);
      commit('setId', id);
    },
    logout({ commit }) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRoles');
      localStorage.removeItem('user');
      localStorage.removeItem('id');
      commit('setAuthToken', null);
      commit('setUserRoles', []);
      commit('setUser', null);
      commit('setId', null);
    }
  }
});
