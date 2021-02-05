<template>
  <v-row class="d-flex justify-center  pa-5  ">
    <h1>registro</h1>
    <v-col cols="11">
      <v-text-field label="E-mail" name="email"  v-model="email" @keyup.enter="register"></v-text-field>
    </v-col>
    <v-col cols="11">
      <v-text-field label="Contraseña" name="password"  v-model="password" @keyup.enter="register"></v-text-field>
      <v-text-field label="Contraseña" name="password"  v-model="password2" @keyup.enter="register"></v-text-field>
      <span>
        <router-link to="/login">¿Ya tienes una cuenta?</router-link>
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-end" min-height="500px">
      <v-btn class="d-flex" color="primary" dark>registrarse</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
    };
  },
};
</script>

<style></style>
