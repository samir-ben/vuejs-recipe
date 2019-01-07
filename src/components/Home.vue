<template>
  <div>
    <div class="ui container">
      <h1>Mes recettes</h1>
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
              <div class="extra content">
                <span class="ui button right floated">
                  <router-link :to="{ name: 'EditRecipe', params: { id: recipe.id } }">Modifier</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import db from "@/firebase/init";

export default {
  name: "Navbar",
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    deleteRecipe(id) {
      db.collection("recipes")
        .doc(id)
        .delete()
        .then(() => {
          this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== id;
          });
        });
    }
  },
  created() {
    db.collection("recipes")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let recipe = doc.data();
          recipe.id = doc.id;
          this.recipes.push(recipe);
        });
      });
  }
};
</script>



<style scoped>
h1 {
  margin: 30px auto;
}
.card {
  margin: -5px -5px;
}
.trash {
  color: rgb(136, 136, 136);
  cursor: pointer;
}
.trash:hover {
  color: rgb(23, 23, 23);
}
</style>