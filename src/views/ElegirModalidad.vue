<template>
  <v-container fluid fill-height>
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-center flex-wrap">
        <modalidadCard v-for="(modalidad,index) in modalidades" :key="index" :modalidad="{nombre:modalidad.nombre ,id:index,url:modalidad.url,imagen:'https://cdn.vuetifyjs.com/images/cards/cooking.png',desc:'asasdasdasdasdasdasdasddasasdasdasdasdasdasdasdd'}"></modalidadCard>
        
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
      modalidades:[
        {nombre:'examen'},
       { nombre:'estudio',url:'/tests'},
       { nombre:'videos'},
        
      ],
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
          console.log(this.$store)

  },
};
</script>
