<template>
  <v-card
    class="ma-3"
    :to="`/test/${test.id}`"
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    min-height="150px"
    min-width="150px"
    max-height="250px"
    max-width="250px"
  >
    <v-row class="d-flex  justify-center align-center ">
      <v-col cols="12" class="d-flex justify-center align-self-center " >
      <p class="text-center "> {{ test.id }} </p>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["test"],
};
</script>

<style></style>
