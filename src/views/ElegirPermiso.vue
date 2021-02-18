<template>
  <v-container fluid fill-height>
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-center flex-wrap">
        <permisoCard v-for="(permiso,index) in permisos" :key="index" :permiso="permiso"></permisoCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import permisoCard from '../components/permisoCard'
export default {
components:{
  permisoCard
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
    async getPermisos(){
      await this.$store.dispatch('getPermisos')
    }
    
  },
  computed:{
    path(){
      return this.$route.path
    },
    
    permisos(){
      return this.$store.getters.getPermisos
    },
  },
  watch:{
    path(){
      this.watchRoute()
    }
  },
  mounted() {
          this.watchRoute()
          this.getPermisos()

  },
};
</script>
