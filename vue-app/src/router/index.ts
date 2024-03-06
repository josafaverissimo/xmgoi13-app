import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import Database from "@/components/Database.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: 'database',
      component: Database
    }
  ]
})
