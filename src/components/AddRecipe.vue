<template>
  <div class="ui container raised very padded segment">
    <h2>Ajouter une nouvelle recette</h2>
    <form class="ui form" @submit.prevent="AddRecipe">
      <div class="field">
        <label for="title">Titre</label>
        <input name="title" type="text" v-model="title">
      </div>
      <div class="field" v-for="(ing, index) in ingredients" :key="index"> 
        <label for="ingredients">Ingrédient</label>
        <input name="ingredients" type="text" v-model="ingredients[index]">
        <i class="trash icon" @click="deleteIng(ing)"></i> 
      </div>
      <div class="field">
        <label for="ingredient">Ajouter un ingrédient</label>
        <input name="ingredient" type="text" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field">
        <p class="ui yellow message" v-if="feedback">{{feedback}}</p>
      </div>
      <button class="ui submit button">Ajouter</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: "AddRecipe",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    AddRecipe() {
      if(this.title){
          this.feedback= null;
          this.slug = slugify(this.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
            })
          db.collection('recipes').add({
              title: this.title,
              ingredients: this.ingredients,
              slug: this.slug
      }).then(()=>{
          this.$router.push({ name: 'Home'});
      }).catch(err =>{
          console.log(err);
      })
      }else{
          this.feedback = "Veuillez indiquer un titre pour la recette";
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback= null;
      } else {
        this.feedback = "Veuillez ajouter un ingrédient";
      }
    },
    deleteIng(ing) {
        this.ingredients = this.ingredients.filter(ingredient => {
            return ingredient !== ing;
        })
    }
  }
};
</script>

<style scoped>
.field{
    position: relative;
}
.trash{
    position: absolute;
    top: 32px;
    right: 5px;
    color: rgb(136, 136, 136);
    cursor: pointer;
}
.trash:hover{
    color: rgb(23, 23, 23);
}
</style>
