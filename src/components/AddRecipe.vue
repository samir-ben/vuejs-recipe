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
export default {
  name: "AddRecipe",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null
    };
  },
  methods: {
    AddRecipe() {
      console.log(this.title, this.ingredients);
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback= null;
      } else {
        this.feedback = "Veuillez ajouter un ingrédient";
      }
    }
  }
};
</script>

<style scoped>
</style>
