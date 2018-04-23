import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedGames: [
      { imageUrl: './assets/wd2.jpg', id: 'uszvg2342ui', title: 'Far Cry 5', date: '2017-07-17' },
      { imageUrl: './assets/fc5.jpeg', id: 'hfu2z2v3bg4zv', title: 'Watch Dogs 2', date: '2017-07-19' }
    ],
    user: {
      id: 'iuh234234',
      followedGames: ['uszvg2342ui']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedGames (state) {
      return state.loadedGames.sort((gameA, gameB) => {
        return gameA.date > gameB.date
      })
    },
    featuredGames (state, getters) {
      return getters.loadedGames.slice(0, 5)
    },
    loadedGame (state) {
      return (gameId) => {
        return state.loadedGames.find((game) => {
          return game.id === gameId
        })
      }
    }
  }
})
