import { createRouter, createWebHistory } from 'vue-router';
import InvoiceIndex from '../components/invoices/index.vue'
import NotFound from '../components/NotFound.vue'
import InvoiceNew from '../components/invoices/new.vue'

const routes = [
    {
        path:'/',
        component: InvoiceIndex
    },
    {
        path:'/invoice/new',
        component: InvoiceNew
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router