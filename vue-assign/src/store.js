import { createStore } from "vuex";
import { conversation, currentUser } from "./mockApi";

// Create a new store instance.
const store = createStore({
  state: {
    conversation: {},
    currentUser: {},
  },
  mutations: {
    fetchData() {
    
      this.state.conversation = JSON.parse(conversation);
      this.state.currentUser = JSON.parse(currentUser);
    },
  },
  actions: {
    fetchDataApi(context) {
      context.commit("fetchData");
    },
  },
});

export default store;
