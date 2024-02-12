import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ViewMore from "./views/ViewMore.vue"
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: "/", component:HelloWorld },
    {   path: "/ViewMore",
        name:"ViewMore", 
        component:ViewMore,
        /*props: route => ({ title: route.query.title })*/
        
     },
     { path: "/", name:"home", component:HelloWorld },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        //console.log("Inside CreateRouter")
        // always scroll to top
        // return { top: 0 }

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       resolve({  top: 0 })
        //     }, 100)
        //   })
      },
    routes
})

createApp(App).use(router).mount('#app')
