const state = {
  id: 1
}

const actions = {
  setId (stores: any) {
    stores.state.id ++
    return stores.state.id
  }
}

const getters = {
  getId (data: any): string {
    debugger
    return data.id + 'dd'
  }
}

const mutations = {
  addId (data: any) {
    data.id ++
    return data.id
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
