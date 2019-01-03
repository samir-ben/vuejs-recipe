<template>
    <nav class="ui container">
        <div class="ui container top attached tabular mini menu">
                <router-link to="/" class="active item">Home</router-link>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon compact mini menu">
                        <router-link to="/" class="item">
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

</style>


