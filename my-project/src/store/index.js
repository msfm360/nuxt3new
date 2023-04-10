import { createStore } from "vuex";
export default createStore({
  state: {
    Language: "en",
  },
  mutations: {
    setLanguage(state, languageCode) {
      state.Language = languageCode;
    },
  },
  actions: {},
  modules: {},
});
