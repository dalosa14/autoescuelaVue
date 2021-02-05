<template>
  <v-container fluid fill-height>
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-center flex-wrap">
        <permisoCard v-for="(permiso,index) in permisos" :key="index" :permiso="{nombre:permiso.nombre ,id:index}"></permisoCard>
        
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
      permisos:[
        {nombre:'permiso a'},
       { nombre:'permiso b'},
       { nombre:'permiso c'},
        {nombre:'permiso d'},
        {nombre:'permiso e'},
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
