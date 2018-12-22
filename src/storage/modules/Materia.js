import axios from 'axios'
import {store} from '../storage'


const url = 'http://127.0.0.1:8000'

const state = {
  endpoints: {
    materia:  url + '/Materia/'
  },
  materiasarray: []
}

const mutations = {
  /** Cursos**/
  async listarMateria (state) {
    await axios.get(state.endpoints.materia).then((response) => {
      state.materiasarray = response.data
    }).catch(error => {
      state.materiasarray = []
    })
  },
}
const actions = {
  /* Curso */
  getMateria ({commit}) {
    commit('listarMateria')
  }
}

const getters = {
  materiasarray: (state) => {
    return state.materiasarray
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
