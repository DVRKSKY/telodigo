import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/' , name: 'home', component: ()=>import('../views/home.vue') },
    {path: '/hoteles/:idHotel?' , component: ()=>import('../views/hoteles.vue'), children: [
        {path: 'cardHotel' , name: 'card', component: ()=>import('../views/hoteles/hotelCard.vue') },
        {path: 'cardPerfil' , name: 'perfil', component: ()=>import('../views/hoteles/perfil.vue') },
    ] },


]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })