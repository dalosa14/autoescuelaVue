<template>
  <ValidationObserver v-slot="{ invalid }">
    <v-row class="d-flex justify-center  pa-5  ">
      <h1>logueo</h1>

      <v-col cols="11">
        <ValidationProvider rules="required|email" name="Nombre" v-slot="v">
          <v-text-field
            label="E-mail"
            name="email"
            :error-messages="v.errors[0]"
            v-model="user.email"
            @keyup.enter="login"
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="11">
        <ValidationProvider rules="required|min:6" name="pass1" v-slot="v">
          <v-text-field
            label="Contraseña"
            name="password"
            :error-messages="v.errors[0]"
            type="password"
            v-model="user.password"
            @keyup.enter="login"
          ></v-text-field>
        </ValidationProvider>
        <span>
          <router-link to="/register">¿Aún no tienes una cuenta?</router-link>
        </span>
      </v-col>
      <v-col class="d-flex justify-center align-end" min-height="500px">
        <v-btn
          @click="login()"
          class="d-flex"
          color="primary"
          :disabled="invalid"
          >ENTRAR</v-btn
        >
      </v-col>
    </v-row>
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
  </ValidationObserver>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: `La casilla es requerida`,
});
extend("email", {
  ...email,
  message: `Debe de ser un email valido`,
});

extend("min", {
  ...min,
  message: `La contraseña debe de ser de 6 o más caracteres`,
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      error: {
        active: false,
        text: "",
      },
      loading: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      this.loading = true;
      let response = await this.$store.dispatch("login", this.user);
      console.log(response)
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
    },
  },
};
</script>

<style></style>
