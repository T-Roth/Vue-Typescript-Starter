import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Summary from '@/components/Summary.vue'
import Leaderboard from '@/components/Leaderboard.vue'
import AddSteps from '@/components/AddSteps.vue'
//import Participants from '@/components/Participants.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/addsteps',
      name: 'AddSteps',
      component: AddSteps
    },
    {
      path: '/participants',
      name: 'Participants',
      //component: Participants
      component: () => import('@/components/Participants.vue')
    },
  ]
})
