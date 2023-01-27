import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue';
import ContactView from '../views/ContactView.vue';
import ProjetsView from '../views/ProjetsView.vue';
import ServicesView from '../views/ServicesView.vue';
import ProposView from '../views/ProposView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/projets', name: 'Projets', component: ProjetsView },
    { path: '/services', name: 'Services', component: ServicesView },
    { path: '/propos', name: 'Propos', component: ProposView },
    // ici les autre routes
  ]
})

export default router
