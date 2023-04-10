const state = {
    current: 'en',
  };
  
  const mutations = {
    setLanguage(state, languageCode) {
      state.current = languageCode;
      // dispatch fetchContent action of hero module whenever language is changed
      this.dispatch('hero/fetchContent');
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
  };
  