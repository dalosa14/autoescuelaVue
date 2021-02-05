<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col class="d-flex justify-center align-center">
        <v-card
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          min-width="350px"
          max-width="400px"
          min-height="300px"
          max-height="400px"
        >
          <login v-if="this.mode == 'login'"></login>
          <register v-if="this.mode == 'register'"></register>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import login from "../components/login";
import register from "../components/register";
import getCsrfToken from '../apis/getCsrfToken'
export default {
  components: {
    register,
    login,
  },
  data() {
    return {
      
      mode:''
    };
  },
  methods: {
    watchRoute(){
      if (this.path == '/register') {
          return this.mode = 'register'
      }return this.mode = 'login'
    },
    
  },
  computed:{
    path(){
      return this.$route.path
    }
  },
  watch:{
    path(){
      this.watchRoute()
    }
  },
  mounted() {
          this.watchRoute()
          console.log(getCsrfToken)

  },
};
</script>
