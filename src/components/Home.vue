<template>
  <div>
    <div class="ui container">
      <h1>Home</h1>
      <div class="ui grid">
        <div class="sixteen wide column">
          <div class="ui four stackable cards">
            <div class="ui card" v-for="recipe in recipes" :key="recipe.id">
              <div class="content">
                <i class="right floated trash icon" @click="deleteRecipe(recipe.id)"></i>
                <div class="header">{{ recipe.title }}</div>
                <div class="description">
                  <div class="ui mini horizontal divided list">
                    <div
                      class="item"
                      v-for="(ingredient, index) in recipe.ingredients"
                      :key="index"
                    >
                      <div class="content">
                        <div class="header">{{ingredient}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      recipes: [
        {
          title: "Recette 1",
          slug: "recette-1",
          ingredients: ["bananes", "café", "sucre"],
          id: 1
        },
        {
          title: "Recette 2",
          slug: "recette-2",
          ingredients: ["fraises", "cacao", "vanille"],
          id: 2
        },
        {
          title: "Recette 3",
          slug: "recette-3",
          ingredients: ["bananes", "café", "sucre"],
          id: 3
        },
        {
          title: "Recette 4",
          slug: "recette-4",
          ingredients: ["bananes", "café", "sucre"],
          id: 4
        },
        {
          title: "Recette 5",
          slug: "recette-5",
          ingredients: ["bananes", "café", "sucre"],
          id: 5
        }
      ]
    };
  },
  methods: {
      deleteRecipe(id){
          this.recipes = this.recipes.filter(recipe =>{
              return recipe.id !== id
          })
      }
  },
};
</script>



<style scoped>
.card {
  margin: -5px -5px;
}
.trash{
    color: rgb(136, 136, 136);
    cursor: pointer;
}
.trash:hover{
    color: rgb(23, 23, 23);
}
</style>