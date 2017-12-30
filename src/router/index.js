import Vue from 'vue'
import Router from 'vue-router'
import Form2 from '@/components/Form2'
import Thanks from '@/components/Thanks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form2',
      component: Form2
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
})
