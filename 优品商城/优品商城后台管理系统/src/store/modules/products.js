import { products, delById } from '../../api/product'
export default {
  namespaced: true,
  state: {
    list: [],
    listLoading: true,
    totalCount: 0
  },
  actions: {
    async loadData({ commit }, payload) {
      const res = await products(payload)
      commit('save', res)
    },
    async delLoad({ commit, dispatch }, payload) {
      const res = await delById(payload)
      console.log(res)
      dispatch('loadData')
    }
  },
  mutations: {
    save(state, payload) {
      state.list = payload.products
      state.totalCount = payload.totalCount
      state.listLoading = false
    }
  }
}
