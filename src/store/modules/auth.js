import axios from "axios";

const state = {
  user: null,
  tasks: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  StateTasks: state => state.tasks,
  StateUser: state => state.user,
};

const actions = {
  async LogIn({ commit }, user) {
    await axios.post("login", user).then(async res => {
      var userr = res.data.response.data;
      console.log(userr.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${userr.token}`;

      await commit("setUser", userr);
    });
  },
  async getAllTasks({ commit }) {
    await axios
      .get("/task")
      .then(async res => {
        var userr = res.data.response.data;
        await commit("setTasks", userr);
      })
      .catch(err => {
        console.log(err);
      });
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  setTasks(state, tasks) {
    state.tasks = tasks;
  },

  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
