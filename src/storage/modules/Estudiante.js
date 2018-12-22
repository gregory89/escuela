import axios from 'axios'
import {store} from '../storage'

const url = 'http://127.0.0.1:8000'

const state = {
  endpoints: {
    estudiante:  url + '/Estudiante/'
  },
  estudiantesarray: []
}

const mutations = {
  /** Cursos**/
  async listarEstudiante (state) {
    await axios.get(state.endpoints.estudiante).then((response) => {
      state.estudiantesarray = response.data
    }).catch(error => {
      state.estudiantesarray = []
    })
  },
}
const actions = {
  /* Curso */
  getEstudiantes ({commit}) {
    commit('listarEstudiante')
  }
}

const getters = {
  estudiantesarray: (state) => {
    return state.estudiantesarray
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
