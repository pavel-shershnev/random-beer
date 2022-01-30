import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    beer: {}
  },
  getters: {
    getUser(state){
      return state.user
    },
    getBeer(state){
      return state.beer
    }
  },
  mutations: {
    updateUser(state, user){
      state.user = user
    },
    updateBeer(state, beer){
      state.beer = beer
    }
  },
  actions: {
    async getUser({commit}){
      await fetch('https://random-data-api.com/api/users/random_user', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(user => {
        const personal_data = {}
        personal_data.id = user.id
        personal_data.uid = user.uid
        personal_data.password = user.password
        personal_data.first_name = user.first_name
        personal_data.last_name = user.last_name
        personal_data.username = user.username
        personal_data.email = user.email
        personal_data.avatar = user.avatar
        personal_data.gender = user.gender
        personal_data.phone_number = user.phone_number
        personal_data.ocial_insurance_number = user.ocial_insurance_number
        personal_data.date_of_birth = user.date_of_birth
        const userData = []
        userData.push(personal_data, user.employment, user.address, user.credit_card, user.subscription)
        commit('updateUser', userData)
      })
      .catch((error) => {
        console.error('Error:', error);
      })

    },
    async getBeer({ commit }){
      await fetch('https://random-data-api.com/api/beer/random_beer', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        commit('updateBeer', data)
      })
      .catch(error => console.error('error', error))
    }
  },
  modules: {
  }
})
