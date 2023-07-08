import { createStore } from "vuex";
import { conversation, currentUser } from "./mockApi";

// Create a new store instance.
const store = createStore({
  state: {
    chat: {
      conversation: [],
      currentUser: [],
    },
  },
  mutations: {
    fetchData() {
      let x = JSON.parse(conversation);
      let tempArr = [];
      Object.values(x).forEach((t) => tempArr.push(t));
      this.state.chat.conversation = tempArr;

      this.state.chat.currentUser = JSON.parse(currentUser);
    },
    async sendData(_, val) {
   
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            (this.state.chat.conversation = [
              ...this.state.chat.conversation,
              val,
            ])
          );
        }, 500);
      });
    },
  },
  actions: {
    fetchDataApi(context) {
      context.commit("fetchData");
    },
    async sendDataApi(context, val) {
      await context.commit("sendData", val);
    },
  },
});

export default store;
