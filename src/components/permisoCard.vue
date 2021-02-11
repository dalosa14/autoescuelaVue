<template>
<v-hover v-slot="{ hover }">
  <v-card
  class="ma-3"
  :elevation="hover ? 12 : 2"
    :to="`/seleccionModalidad/${permiso.id}`"
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    min-height="100px"
    min-width="100px"
    max-height="700px"
    max-width="400px"
  >
    <v-img
      min-height="100px"
      min-width="100px"
      max-height="700px"
      max-width="400px"
      :src="permiso.img"
    ></v-img>
    <v-row class="d-flex pa-1">
<v-col class="d-flex justify-center  ma-5 ">
      <h2 class="d-flex  text-uppercase ">{{ permiso.name }}</h2>
    </v-col>
    

</v-row>
   
  </v-card>
</v-hover>
</template>

<script>
export default {
  props: ["permiso"],
};
</script>

<style></style>
