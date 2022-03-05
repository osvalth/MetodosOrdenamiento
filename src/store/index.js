import { createStore } from 'vuex'
import data from "bootstrap/js/src/dom/data";

export default createStore({
  state: {
    numero : null,
  },
  mutations: {
    agregarvalor(state, payload){
      state.numero = payload;
      console.log(state.numero)
    }
  },
  actions: {
    recibirDatos({commit}){
      commit("agregarvalor", data)
    }
  },
  modules: {
  }
})
