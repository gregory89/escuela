import axios from 'axios'
import {store} from '../storage'

const url = 'http://127.0.0.1:8000'

const state = {
  endpoints: {
    docente:  url + '/Docente/'
  },
  docentesarray: [],
  docentesalvar: []
}

const mutations = {
  /** Cursos**/
  async listDocente (state) {
    await axios.get(state.endpoints.docente).then((response) => {
      state.docentesarray = response.data
    }).catch(error => {
      state.docentesarray = []
    })
  },
  /*async PostDocente(state) {
    await axios.post(state.endpoints.docente,{
      Nombre: 'Sociales',
      Codigo: 'SOC'
    } ).then((response) => {
      state.docentesalvar = response
    }).catch(error => {
      state.docentesalvar = []
    })

  }
*/
}

const actions = {
  /* Docente*/
  getdocente({commit}) {
    commit('listDocente')
  },
  postdocente ({commit}) {
    commit('Postdocente')
  }
}


const getters = {
  docentesarray: (state) => {
    return state.docentesarray
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
