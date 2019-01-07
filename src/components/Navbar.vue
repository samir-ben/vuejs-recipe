<template>
    <nav class="ui container">
        <div class="ui container top attached tabular mini menu">
                <router-link :to="{ name: 'Home'}" class="active item">Accueil</router-link>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon compact mini menu">
                        <router-link :to="{ name: 'AddRecipe'}" class="item">
                            <i class=" teal plus icon"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
</template>


<script>
export default {
   name: 'Navbar',
   data(){
    return {
      
    }
  } 
}
</script>



<style scoped>
nav {
    margin-top: 20px;
}
</style>


