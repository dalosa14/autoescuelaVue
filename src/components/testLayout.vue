<template>
  <v-row fill-height>
    <v-col cols="12">
      <v-col>
        <testBar></testBar>
      </v-col>
    </v-col>
    <v-row justify="center">
      <v-col md="5" xs="11" class="d-flex justify-center">
        <img
          aspect-ratio="1.0"
          shrink
          src="https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg"
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
          v-for="(opcion, index) in opciones"
          :key="index"
          @click="seleccionarOpcion(index)"
        >
          <testOptionImg :opcion="opcion">{{ opcion.texto }}</testOptionImg>
        </v-col>
      </v-row>
    </v-row>
  </v-row>
</template>

<script>
import testBar from "./testBar";
import testOptionImg from "./testOptionImg";
export default {
  components: {
    testBar,
    testOptionImg,
  },
  data() {
    return {
      opciones: [
        {
          opcion: "A",
          correcta: false,
          elegida: false,
          texto: "",
        },
        {
          opcion: "B",
          elegida: false,
          correcta: false,

          texto: "sdasd",
        },
        {
          opcion: "C",
          elegida: false,
          correcta: true,

          texto: "sdasd",
        },
      ],
    };
  },
  methods: {
    seleccionarOpcion(index) {
        console.log(index)
      this.opciones[index].elegida = true;
    },
  },
};
</script>

<style></style>
