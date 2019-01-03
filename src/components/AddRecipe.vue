<template>
  <div class="ui container raised very padded segment">
    <h2>Ajouter une nouvelle recette</h2>  
    <form class="ui form" @submit.prevent="AddRecipe">
      <div class="field">
        <label for="title">Titre</label>
        <input name="title" type="text" v-model="title">
      </div>
      <div class="field">
        <label for="ingredient">Ingrédient</label>
        <input name="ingredient" type="text">
      </div>
      <button class="ui submit button">Ajouter</button>
      <button class="ui error message"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddRecipe",
  data() {
    return {
        title: null
    };
  },
  methods: {
      AddRecipe() {
          console.log(this.title)
      }
  },
};
</script>

<style scoped>
</style>
