<template>
  <v-row fill-height>
    <v-col cols="12">
      <v-col>
        <testBar :titulo="pregunta.name" :numeroPreguntasTotales="numeroPreguntasTotales" :numeroPreguntaActual="numeroPreguntaActual"></testBar>
      </v-col>
    </v-col>
    <v-col cols="12" class="d-flex justify-center mb-5">
      <h2>{{pregunta.question}}</h2>

    </v-col>
    <v-row justify="center">
      <v-col md="5" xs="12" class="d-flex justify-center offset-md-1">
        <img
          aspect-ratio="1.0"
          shrink
          :src="pregunta.img"
          width="425px"
        />
      </v-col>
      <v-row
        offset-md="1"
        md="5"
        xs="12"
        class="d-flex flex-column justify-space-between hidden-sm-and-down"
      >
        <v-col
          v-for="opcion in pregunta.opciones"
          :key="opcion.id"
          @click="seleccionarOpcion(opcion)"
        >
          <testOptionImg :opcion="opcion"></testOptionImg>
        </v-col>
      </v-row>
    </v-row>
    
  </v-row>
</template>

<script>
import testBar from "./testBar";
import testOptionImg from "./testOptionImg";
export default {
  props:['pregunta'],
  components: {
    testBar,
    testOptionImg,
  },
  data() {
    return {
      
    };
  },
  methods: {
    seleccionarOpcion(opcion) {
      if (this.preguntaRespuesta != '') return
      this.$store.commit('setRespuestaToPreguntaActual',opcion.id)
            

      
    },
  },
  computed:{
    preguntaRespuesta() {
      return this.$store.getters.getActualPregunta.respuesta;
    },
    numeroPreguntasTotales(){
      return this.$store.getters.getTotalPreguntas
    },
    numeroPreguntaActual(){
      return this.$store.getters.getActualPreguntaIndex +1
    }
  }
};
</script>

<style></style>
