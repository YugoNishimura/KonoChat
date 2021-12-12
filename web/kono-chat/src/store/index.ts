import axios from 'axios';
import { createStore } from 'vuex';
import Message from '@/types/Message';

export type State = { messageList: Message[] }

const state: State = { messageList: [] };

export const store = createStore({
  state,
  mutations: {
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    addUserMessage(state: State, message: string) {
      state.messageList.push({ senderId: 0, message });
    },
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    addKonoMessage(state: State, message: string) {
      state.messageList.push({ senderId: 1, message });
    },
  },
  actions: {
    addUserMessage({ commit }, message) {
      commit('addUserMessage', message);
    },
    getKonoMessage({ commit }, status) {
      /* eslint-disable-next-line */
      axios.post('http://localhost:5000/' + status.route, { message: status.message }).then((response) => {
        commit('addKonoMessage', JSON.parse(JSON.stringify(response.data)).message);
      });
    },
  },
  getters: {
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    messageList(state: State) {
      return state.messageList;
    },
  },
});
