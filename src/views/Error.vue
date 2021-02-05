<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-icon x-large >fas fa-meteor</v-icon>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1>
          La página que buscas no existe
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>


export default {
  
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
          

  },
};
</script>
