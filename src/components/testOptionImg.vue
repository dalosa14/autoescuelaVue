<template>
  <v-hover v-slot="{ hover }">
    <v-row
      class="d-flex justify-center"
      :class="{ 'on-hover': hover, elegida: esElegida }"
    >
      <v-col cols="2" class="d-flex justify-start">
        <div :class="clase">{{ opcion.id }}</div>
      </v-col>
      <v-col
        cols="8"
        class="d-flex justify-start align-center ma-0 offset-md-2"
      >
        <p>{{ opcion.opcion }}</p>
      </v-col>
    </v-row>
  </v-hover>
</template>

<script>
export default {
  props: ["opcion"],
  data() {
    return {
      clase: "numberCircle",
      esElegida: false,
    };
  },
  methods: {
    //comprueba si la respuesta es la correcta y le cambia la clase
    elegida() {
      if (this.preguntaContestada ) {
        if (this.opcion.correcto ) {
          this.clase = "numberCircleAcierto";
        }
        if (!this.opcion.correcto) {
          this.clase = "numberCircleFallo";
        }
      } else {
          this.clase = 'numberCircle'
      }
    },
    esContestada() {
      this.elegida();
      if (this.respuesta == this.opcion.id) {
        this.esElegida = true;
      } else {
        this.esElegida = false;
      }
    },
  },
  computed: {
    preguntaContestada() {
      return this.$store.getters.getPreguntaActual.contestada;
    },
    respuesta() {
      return this.$store.getters.getPreguntaActual.respuesta;
    },
  },
  watch: {
    preguntaContestada() {
      this.esContestada();
    },
  },
  mounted() {
    this.esContestada();
    this.elegida()
  },
};
</script>

<style>
.numberCircle {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  padding: 16px;

  background: #fff;
  border: 4px solid #666;
  color: rgb(0, 0, 0);
  text-align: center;

  font: 32px Arial, sans-serif;
}
.numberCircleAcierto {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  padding: 16px;

  background: #fff;
  border: 4px solid #666;
  color: rgb(14, 189, 23);
  text-align: center;

  font: 32px Arial, sans-serif;
}
.numberCircleFallo {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  padding: 16px;

  background: #fff;
  border: 4px solid #666;
  color: rgb(255, 0, 0);
  text-align: center;

  font: 32px Arial, sans-serif;
}
.on-hover {
  background-color: rgb(211, 211, 211);
}
.elegida {
  background-color: rgb(146, 224, 255);
}
</style>
