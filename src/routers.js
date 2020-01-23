import VueRouter from "vue-router"
import Vue from "vue"
import Frame from "./components/Frame.vue"
import Login from "./components/Login.vue"

Vue.use(VueRouter)

const router=new VueRouter({
  routes:[
    {
      path:"/",
      component: Frame,
      name:'frame'

    },
    {
      path:"/login",
      component: Login,
      name:"login"
      
    }
  ]
})

export default router