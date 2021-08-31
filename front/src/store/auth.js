export default {
  state: {
    user: {
      auth: false,
      login: '',
      name: '',
      lastname: '',
      admin: false,
    },
  },
  actions: {},
  mutations: {},
  getters: {
    getUser(store) {
      return store.user;
    },
  },
};
