<template>
  <v-container fluid fill-height class="d-flex align-start">
    <testLayout v-if="loaded"></testLayout>
    <v-btn @click="addPregunta()" color="success">text</v-btn>
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
    addPregunta() {
      this.$store.commit("addPreguntaToPreguntas", {
        id: 0,
        nombre: "Volantes",
        pregunta: "¿Cual es el mejor volante?",
        opciones: [
          { id: "A", opcion: "rectangular", correcto: false },
          { id: "B", opcion: "cuadrado", correcto: false },
          { id: "C", opcion: "Circular", correcto: true },
        ],
        contestada: false,
        imagen:
          "https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg",
      });
      this.$store.commit("addPreguntaToPreguntas", {
        id: 1,
        nombre: "Conductores",
        pregunta: "¿Cual es la mejor posición?",
        opciones: [
          { id: "A", opcion: "recto", correcto: false },
          { id: "B", opcion: "encorbado", correcto: false },
          { id: "C", opcion: "relajado", correcto: true },
        ],
        contestada: false,
        imagen:
          "https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg",
      });
      this.loaded = true;
    },
    nextPregunta(){
      this.$store.commit('nextPreguntaActual')
    },
    watchRoute() {
      if (this.path == "/register") {
        return (this.mode = "register");
      }
      return (this.mode = "login");
    },
  },
  computed: {
    path() {
      return this.$route.path;
    },
    preguntas() {
      return this.$store.getters.getPreguntas;
    },
  },
  watch: {
    path() {
      this.watchRoute();
    },
  },
  mounted() {
    this.watchRoute();
    console.log(this.$store);
  },
};
</script>
