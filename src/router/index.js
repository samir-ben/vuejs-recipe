import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddRecipe from '@/components/AddRecipe'
import EditRecipe from '@/components/EditRecipe';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-recipe',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/edit-recipe/:id',
      name: 'EditRecipe',
      component: EditRecipe
    }
  ]
});
