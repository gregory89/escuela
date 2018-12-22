import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import Cursos from './modules/Cursos'
import Estudiante from './modules/Estudiante'
import Materia from './modules/Materia'
import Docente from './modules/Docentes'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Cursos,
    Estudiante,
    Docente,
    Materia
  },
  state: {
    nombre: '',
  },
  mutations: {},
  actions: {},
  getters: {}
})
