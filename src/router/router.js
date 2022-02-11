import BodySite from '../pages/BodySite'
import content from '../bodyRoutes/contentBody'
import cabinet from '../bodyRoutes/userCabinet'

// import auth from '../store/modules/auth'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'',
    component: BodySite,
    children:[
      {
        path: '/content',
        name:'content',
        component: content
      },
      {
        path: '/cabinet',
        name:'cabinet',
        component: cabinet
      }
    ]
  }
]

// router.beforeEach((from,to,next)=>{
//   if(!auth.state.auth && to.name === 'cabinet'){
//     alert("Не авторизован")
//   }else{ next()}
// })

const router = createRouter({
  routes,
  history: createWebHistory(process.env.bASE_URL)
})

export default router