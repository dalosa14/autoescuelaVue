<template>
  <v-card >
      <v-card-title>
        {{titulo}} - {{getActualPregunta}}/{{getTotalPreguntas}}
      </v-card-title>
  </v-card>
</template>

<script>
export default {
props:['titulo'],
methods:{

},
computed:{
    getTotalPreguntas(){
        return this.$store.getters.getTotalPreguntas
    },
    getActualPregunta(){
        return this.$store.getters.getActualPregunta
    },

}
}
</script>

<style>

</style>