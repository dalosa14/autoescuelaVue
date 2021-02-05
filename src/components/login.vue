<template>
  <v-row class="d-flex justify-center  pa-5  ">
    <h1>logueo</h1>
    
    <v-col cols="11" >
      <v-text-field label="E-mail" name="email" v-model="email" @keyup.enter="login"></v-text-field>
    </v-col>
    <v-col cols="11">
      <v-text-field label="Contraseña" name="password" v-model="password" @keyup.enter="login"></v-text-field>
      <span>
        <router-link to="/register">¿Aún no tienes una cuenta?</router-link>
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-end" min-height="500px">
      <v-btn @click="login()"  class="d-flex" color="primary" dark>ENTRAR</v-btn>
    </v-col>
    
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(){
      this.$store.commit('loguearUsuario',{nombre:'saul'})
      this.$router.push('/seleccionPermiso')
    }
  },
};
</script>

<style></style>
