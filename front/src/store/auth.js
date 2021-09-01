export default {
  state: {
    user: {
      auth: false,
      login: '',
      name: '',
      lastname: '',
      admin: false,
      token: '',
    },
  },
  mutations: {
    setUser(state, user) {
      if (!user) {
        state.user.auth = false;
        state.user.login = '';
        state.user.name = '';
        state.user.lastname = '';
        state.user.admin = false;
        state.token = '';
      } else {
        state.user.auth = true;
        state.user.login = user.login;
        state.user.name = user.name;
        state.user.lastname = user.lastname;
        state.user.admin = user.admin;
        state.user.token = user.token;
      }
    },
  },
  actions: {
    login({ commit }, payload) {
      localStorage.setItem('token', payload.user.token);
      commit('setUser', payload.user);
    },
    initAuth({ commit, getters }) {
      const token = localStorage.getItem('token');
      if (!token) return;
      const apiUrl = `${getters.api}/token`;
      const apiParams = {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(apiUrl, apiParams)
        .then((response) => {
          if (!response.ok) { throw response; }
          return response.json();
        })
        .then((data) => {
          commit('setUser', data.user);
        })
        .catch(() => {
          commit('setUser', null);
        });
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setUser', null);
    },
  },
  getters: {
    getUser(store) {
      return store.user;
    },
    api() {
      return 'http://127.0.0.1:5000/api';
    },
  },
};
