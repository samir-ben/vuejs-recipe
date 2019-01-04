<template>
  <div v-if="recipe" class="ui container raised very padded segment">
    <h2>Modifier la recette {{recipe.title}}</h2>
    <form class="ui form" @submit.prevent="editRecipe">
      <div class="field">
        <label for="title">Titre</label>
        <input name="title" type="text" v-model="recipe.title">
      </div>
      <div class="field" v-for="(ing, index) in recipe.ingredients" :key="index"> 
        <label for="ingredients">Ingrédient</label>
        <input name="ingredients" type="text" v-model="recipe.ingredients[index]">
        <i class="trash icon" @click="deleteIng(ing)"></i> 
      </div>
      <div class="field">
        <label for="ingredient">Ajouter un ingrédient</label>
        <input name="ingredient" type="text" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field">
        <p class="ui yellow message" v-if="feedback">{{feedback}}</p>
      </div>
      <button class="ui submit button">Modifer</button>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init"
import slugify from 'slugify'

export default {
  name: "EditRecipe",
  data() {
    return {
      recipe: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    editRecipe() {
      if(this.recipe.title){
          this.feedback= null;
          this.recipe.slug = slugify(this.recipe.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
            })
          db.collection('recipes').doc(this.recipe.id).update({
              title: this.recipe.title,
              ingredients: this.recipe.ingredients,
              slug: this.recipe.slug
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
        this.recipe.ingredients.push(this.another);
        this.another = null;
        this.feedback= null;
      } else {
        this.feedback = "Veuillez ajouter un ingrédient";
      }
    },
    deleteIng(ing) {
        this.recipe.ingredients = this.recipe.ingredients.filter(ingredient => {
            return ingredient !== ing;
        })
    }
  },
  created() {
    var ref = db.collection("recipes").doc(this.$route.params.id);
    ref
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          this.recipe = doc.data();
          this.recipe.id = doc.id;
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
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
