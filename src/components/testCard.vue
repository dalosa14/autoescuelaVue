<template>
  <v-card
    class="ma-3"
    :to="`/test/${test.id}`"
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    min-height="50px"
    min-width="50px"
    max-height="50px"
    max-width="50px"
  >
    <v-row class="d-flex justify-center align-self-center">
      <v-card-text class="text-center "> {{ test.id }} </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["test"],
};
</script>

<style></style>
