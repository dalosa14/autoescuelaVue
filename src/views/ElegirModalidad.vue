<template>
  <v-container fluid fill-height>
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-center flex-wrap">
        <modalidadCard v-for="(modalidad,index) in modalidades" :key="index" :modalidad="modalidad"></modalidadCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import modalidadCard from '../components/modalidadCard'
export default {
components:{
  modalidadCard
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
    getModalidades(){
      this.$store.dispatch('getModalidades')
    }
    
  },
  computed:{
    path(){
      return this.$route.path
    },
    modalidades(){
      return this.$store.getters.getModalidades
    }
  },
  watch:{
    path(){
      this.watchRoute()
    }
  },
  mounted() {
          this.watchRoute()
          this.getModalidades()

  },
};
</script>
