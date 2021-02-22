<template>
  <v-container v-if="loaded" fluid fill-height class="d-flex align-start">
    <v-row>
      <v-col cols="12">
    <testLayout :pregunta="preguntaActual"></testLayout>

      </v-col>
       </v-row>
      <v-row   class="d-flex justify-center mt-5">
        <v-col cols="6" class="d-flex justify-end">
            <v-btn @click="backPreguntaActual()" color="success">Pregunta anterior </v-btn>

      </v-col>
      <v-col cols="6">
            <v-btn @click="nextPregunta()" v-if="actualPreguntaIndex+1 != totalPreguntas" color="success">Pregunta siguiente</v-btn>
            <v-btn @click="nextPregunta()" v-else color="info">Terminar test</v-btn>

      </v-col>


      </v-row>
      
         
          <v-row class="d-flex justify-center">
        <v-col cols="12" class="d-flex justify-center"> 
                      <v-btn @click="goToTests()" color="error">Ver más tests</v-btn>

        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import testLayout from "../components/testLayout";
export default {
  components: {
    testLayout,
  },
  data() {
    return {
      loaded: false,
    };
  },

  methods: {
    
    nextPregunta(){
      this.$store.commit('nextPreguntaActual')
    },
    backPreguntaActual(){
      this.$store.commit('backPreguntaActual')
    },
    async getPreguntas(){
     await this.$store.dispatch('getPreguntas',this.$route.params.id)
     this.loaded = true;
    },
    goToTests(){
    this.$store.dispatch('resetTest')
    this.$router.push('/tests')
}
    
  },
  computed: {
   preguntaActual(){
          return this.$store.getters.getActualPregunta

    },
   totalPreguntas(){
          return this.$store.getters.getTotalPreguntas

    },
   actualPreguntaIndex(){
          return this.$store.getters.getActualPreguntaIndex

    },
   
  },
  watch: {
   
  },
  mounted() {
    this.getPreguntas();
  },
};
</script>
