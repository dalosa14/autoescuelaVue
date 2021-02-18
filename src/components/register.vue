<template>
<ValidationObserver>
  <v-row class="d-flex justify-center  pa-5  ">
    <h1>registro</h1>
    <v-col cols="11">
                    <ValidationProvider rules="required" name="Nombre" v-slot="v">

      <v-text-field
        label="Nombre"
        name="nombre"
        v-model="user.name"
                            :error-messages="v.errors[0]"

        @keyup.enter="register"
      ></v-text-field>
                    </ValidationProvider>
    </v-col>
    <v-col cols="11">
              <ValidationProvider rules="required|email" name="Nombre" v-slot="v">

      <v-text-field
        label="E-mail"
        name="email"
                    :error-messages="v.errors[0]"

        v-model="user.email"
        @keyup.enter="register"
      ></v-text-field>
              </ValidationProvider>
    </v-col>
    <v-col cols="11">
      <ValidationProvider
                      rules="required|confirmed:pass2"
                      name="pass1"
                      v-slot="v"
                    >
      <v-text-field
        label="Contraseña"
        name="password"
        type="password"
        v-model="user.password"
                                :error-messages="v.errors[0]"

        @keyup.enter="register"
      ></v-text-field>
      </ValidationProvider>
                          <ValidationProvider name="pass2" v-slot="v" vid="pass2">

      <v-text-field
        label="Contraseña"
        name="password"
        type="password"
        v-model="user.password2"
        @keyup.enter="register"
                                :error-messages="v.errors[0]"

      ></v-text-field>
                          </ValidationProvider>

      <span>
        <router-link to="/login">¿Ya tienes una cuenta?</router-link>
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-end" min-height="500px">
      <v-btn class="d-flex" color="primary" @click="register" dark>registrarse</v-btn>
    </v-col>
    <v-row align="center" justify="center" class="mb-5" v-if="loading">
      <v-col align="center" justify="center">
        <v-progress-circular indeterminate color="amber"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-5" v-if="errorStatus">
      <v-col align="center" justify="center">
        <span class="red--text">{{ error.text }}</span>
      </v-col>
    </v-row>
  </v-row>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email,confirmed } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: `La casilla es requerida`,
});
extend("email", {
  ...email,
  message: `Debe de ser un email valido`,
});
extend("confirmed", {
  ...confirmed,
  message: `Las contraseñas deben coincidir`,
});

export default {
  components:{
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      error: {
        active: false,
        text: "",
      },
            loading: false,

      user: {
        name: "",
        email: '',
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    async register() {
            this.loading = true;

      let response = await this.$store.dispatch('register',this.user)
      if (response.success == false) {
        this.error.active = true;
        this.error.text = response.msg;
      }
           this.loading = false;

    },
  },
  watch: {
    errorStatus() {
      setTimeout(() => (this.error.active = false), 5000);
    },
  },
  computed: {
    errorStatus() {
      return this.error.active;
    }
    }
};
</script>

<style></style>
