<template>
  <v-card >
      <v-card-title>
        {{titulo}} - {{numeroPreguntaActual}}/{{numeroPreguntasTotales}}
      </v-card-title>
  </v-card>
</template>

<script>
export default {
props:['titulo','numeroPreguntasTotales','numeroPreguntaActual'],
methods:{

},

}
</script>

<style>

</style>