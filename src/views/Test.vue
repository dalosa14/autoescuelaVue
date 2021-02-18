<template>
  <v-container fluid fill-height class="d-flex align-start">
    <testLayout v-if="loaded" :pregunta="preguntaActual"></testLayout>
    <v-btn @click="nextPregunta()" color="success">next</v-btn>
    <!-- {{preguntass}} -->
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
    async getPreguntas(){
     await this.$store.dispatch('getPreguntas',this.$route.params.id)
     this.loaded = true;
    }
    
  },
  computed: {
   preguntaActual(){
          return this.$store.getters.getActualPregunta

    },
   
  },
  watch: {
   
  },
  mounted() {
    this.getPreguntas();
  },
};
</script>
