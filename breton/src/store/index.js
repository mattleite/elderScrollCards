import { getFullName } from '~/utils/cards';

// TODO: modify so the API gets the cards.

export const state = () => ({
  query: {},
  results: null,
  error: null
});

export const getters = {
  state: ({ query }) => query.state,
  fullName: ({ query }) => getFullName(query)
};

export const mutations = {
  SET_QUERY(state, query) {
    state.query = query;
  },
  SET_RESULTS(state, results) {
    state.results = results;
    state.error = null;
  },
  SET_ERROR(state, error) {
    state.error = error;
    state.results = null;
  }
};

export const actions = {
  async search({ commit }, query) {
    commit('SET_QUERY', query);
    try {
      let results = await this.$axios.$get('people-search', { params: query });
      commit('SET_RESULTS', results);
    } catch (error) {
      commit('SET_ERROR', error);
    }
  }
};
