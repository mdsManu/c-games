import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games/Games.vue'
import CreateGame from '@/components/Games/CreateGame.vue'
import ViewGame from '@/components/Games/ViewGame'
import Profile from '@/components/User/Profile.vue'
import SignIn from '@/components/User/SignIn.vue'
import SignUp from '@/components/User/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/games/new',
      name: 'CreateGame',
      component: CreateGame
    },
    {
      path: '/games/:id',
      name: 'ViewGame',
      component: ViewGame
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: 'history'
})
