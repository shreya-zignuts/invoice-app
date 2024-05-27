import { createRouter, createWebHistory } from 'vue-router';
import InvoiceIndex from '../components/invoices/index.vue'
import NotFound from '../components/NotFound.vue'
import InvoiceShow from '../components/invoices/show.vue'
import InvoiceNew from '../components/invoices/new.vue'
import InvoiceEdit from '../components/invoices/edit.vue'

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
        path:'/invoice/show/:id',
        component: InvoiceShow,
        props: true
    },
    {
        path:'/invoice/edit/:id',
        component: InvoiceEdit,
        props: true
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