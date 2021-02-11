<template>
  <v-container fluid fill-height class="d-flex align-start">
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-start flex-wrap">
        <testCard v-for="(test,index) in tests" :key="index" :test="{nombre:test.nombre ,id:index,url:test.url,imagen:'https://cdn.vuetifyjs.com/images/cards/cooking.png',desc:'asasdasdasdasdasdasdasddasasdasdasdasdasdasdasdd'}"></testCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import testCard from '../components/testCard'
export default {
components:{
  testCard
},
  data() {
    return {
      tests:[
        {nombre:'examen'},
       { nombre:'estudio',url:'/tests'},
       { nombre:'videos'},
       { nombre:'videos'},
       { nombre:'videos'},
       { nombre:'videos'},
       { nombre:'videos'},
       { nombre:'videos'},
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

  },
};
</script>
