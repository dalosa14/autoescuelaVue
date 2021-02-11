<template>
  <v-row class="d-flex justify-center  pa-5  ">
    <h1>registro</h1>
    <v-col cols="11">
      <v-text-field
        label="Nombre"
        name="nombre"
        v-model="user.name"
        @keyup.enter="register"
      ></v-text-field>
    </v-col>
    <v-col cols="11">
      <v-text-field
        label="E-mail"
        name="email"
        v-model="user.email"
        @keyup.enter="register"
      ></v-text-field>
    </v-col>
    <v-col cols="11">
      <v-text-field
        label="Contraseña"
        name="password"
        type="password"
        v-model="user.password"
        @keyup.enter="register"
      ></v-text-field>
      <v-text-field
        label="Contraseña"
        name="password"
        type="password"
        v-model="user.password2"
        @keyup.enter="register"
      ></v-text-field>
      <span>
        <router-link to="/login">¿Ya tienes una cuenta?</router-link>
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-end" min-height="500px">
      <v-btn class="d-flex" color="primary" @click="register" dark>registrarse</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "saaul",
        email: Math.random(),
        password: "123123",
        password2: "123123",
      },
    };
  },
  methods: {
    async register() {
     let response =  await this.$store.dispatch('register',this.user)
     console.log(response)
    },
  },
  mounted() {
    
  },
};
</script>

<style></style>
