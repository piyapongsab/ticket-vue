import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';

pathify.options.mapping = 'simple';

const getDefaultState = () => ({
  testing: 'ทดสอบ vuex-pathify',
});

const state = Object.assign(getDefaultState());

const mutations = make.mutations(state);
const resetMutation = {
  // eslint-disable-next-line no-shadow
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
};
Object.assign(mutations, resetMutation);

const actions = make.actions(state);
const getters = make.getters(state);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    pathify.plugin,
  ],
  getters,
  state,
  mutations,
  actions,
  modules: {
  },
});
