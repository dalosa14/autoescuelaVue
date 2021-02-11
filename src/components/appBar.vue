<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <h1>Autoescuela</h1>
      <v-spacer></v-spacer>
    
      <v-btn
      v-if="loggedUser  == ''"
        to='/login'
        target="_blank"
        text
      ><v-icon>fas fa-user</v-icon>
        <span class="ml-2">Iniciar sesión</span>
        
      </v-btn>
   
    </v-app-bar>
</template>

<script>
export default {
  methods:{
   
  },
computed:{
  loggedUser(){
      return this.$store.getters.getUserName
    }
}
}
</script>

<style>

</style>