import Vue from "vue";
import VueRouter from "vue-router";

import AdminComponent from '../components/backend/AdminComponent.vue';
import CategoriesComponent from '../components/backend/pages/categories/CategoriesComponent.vue';
import DashboardComponent from '../components/backend/pages/dashboard/DashboardComponent.vue';
import AddCategories from '../components/backend/pages/categories/AddCategories';

Vue.use(VueRouter);

const routes = [

    {
        path: '/admin',
        component: AdminComponent,
        children:[

            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categories/create', component:AddCategories, name: 'admin.categories.create'}

        ]
    }

    

];


const router = new VueRouter({
    routes
})

export default router;