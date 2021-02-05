import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{nombre:''},
    test:{
      id: '',
      nombre:'',
      totalPreguntas:0,
      actualPregunta:0,
    }
    
  },
  mutations: {
    loguearUsuario(state,user){
      state.user.nombre = user.nombre
    },
    setTotalPreguntas(state,cantidad){
      state.test.totalPreguntas = cantidad
    },
    setActualPregunta(state){
      state.test.actualPregunta == state.test.totalPreguntas  ? state.test.actualPregunta : state.test.actualPregunta += 1
    },
  },
  getters:{
    getUserName(state){
      return state.user.nombre
    },
    getTotalPreguntas(state){
      return state.test.totalPreguntas
    },
    getActualPregunta(state){
      return state.test.actualPregunta
    },
  },
  actions: {
  },
  modules: {
  }
})
