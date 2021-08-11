import Vue from 'vue';
import VueRouter from 'vue-router';

import CategoryComponent from '../components/backend/pages/categories/CategoryComponent';
import DashBoardComponent from '../components/backend/pages/dashboard/DashBoardComponent';
import AdminComponent from '../components/backend/AdminComponent';
import AddCategoryComponent from '../components/backend/pages/categories/AddCategoryComponent';
import EditCategoryComponent from '../components/backend/pages/categories/EditCategoryComponent';
/**Productos */
import ProductsComponent from '../components/backend/pages/products/ProductsComponent';




Vue.use(VueRouter);



const routes = [
    {
        path: '/admin',
        component: AdminComponent,
        children:[
            {path: '', component: DashBoardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoryComponent, name: 'admin.categories'},
            {path: 'categories/add', component: AddCategoryComponent, name: 'admin.categories.add'},
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true},

            {path: 'prodcuts', component: ProductsComponent, name:'admin.products'}
            
        ]

    },
    
]

const router = new VueRouter({
    routes
})


export default router;