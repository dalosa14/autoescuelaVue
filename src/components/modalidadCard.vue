<template>
<v-hover v-slot="{ hover }" >
  <v-card
  @click="goTestsModalidad()"
  class="ma-3"
    :elevation="hover ? 12 : 2"

    
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    min-height="100px"
    min-width="100px"
    max-height="500px"
    max-width="300px"
  >
    <v-img
      min-height="100px"
      min-width="100px"
      max-height="300px"
      max-width="300px"
      :src="modalidad.img"
    ></v-img>
    <v-row class="d-flex pa-1">
<v-col class="d-flex justify-center pa-0 mt-5 ">
      <h2 class="d-flex  text-uppercase ">{{ modalidad.name }}</h2>
    </v-col>
    
 <v-card-text class="text-center ">
{{modalidad.description}}    </v-card-text>
</v-row>
   
  </v-card>
</v-hover>
</template>

<script>
export default {
  props: ["modalidad"],
  methods:{
    goTestsModalidad(){
      this.$store.dispatch('selectModalidad',this.modalidad.code)
    }
  }
};
</script>

<style></style>
