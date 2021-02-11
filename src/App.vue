<template>
  <v-app>
    <appBar v-if="showBar" app></appBar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appBar from "./components/appBar";
const {mixins} = require('./mixins/mixins')
export default {
  name: "App",
  mixins:[mixins],
  components: {
    appBar,
  },
  data() {
    return {
      showBar: true,
    };
  },
  methods: {
    
    
    
    // por si tengo que ocultar la barra para alguna ruta en concreto, este código repetido en vue 3 lo haría con el composition api para ahorrarme la repetición y no uso mixins porque no me gustan.
    watchRoute() {
      if (this.path != "/ejemplo") {
        return (this.showBar = true);
      }
      return (this.showBar = false);
    },
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  watch: {
    path() {
      this.watchRoute();
    },
  },
  mounted() {
    
    this.watchRoute();
  },
};
</script>
