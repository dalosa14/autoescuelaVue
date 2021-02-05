<template>
  <v-container fluid fill-height class="d-flex align-start">
    
        <testLayout></testLayout>
     
    
  </v-container>
</template>
<script>
import testLayout from '../components/testLayout'
export default {
components:{
  testLayout
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
