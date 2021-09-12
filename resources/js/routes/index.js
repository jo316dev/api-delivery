import Vue from 'vue';
import VueRouter from "vue-router";

/**
 * components
 */
import AdminComponent from '../components/backend/AdminComponent.vue';

import CategoriesComponent from '../components/backend/pages/categories/CategoriesComponent.vue';
import DashboardComponent from '../components/backend/pages/dashboard/DashboardComponent.vue';
import AddCategory from '../components/backend/pages/categories/AddCategory.vue';
import EditCategory from '../components/backend/pages/categories/EditCategory';



Vue.use(VueRouter);

const routes = [

    {
        path: '/admin',
        component: AdminComponent,
        children:[
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
            {path: 'categories/create', component: AddCategory, name: 'admin.categories.create'},
            {path: 'categories/:id/edit', component: EditCategory, name: 'admin.categories.edit', props: true},
        ]
    },
    
    

];

const router = new VueRouter({
    routes
});


export default router;