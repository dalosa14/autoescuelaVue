<template>
  <v-row class="d-flex justify-center align-center fill-height">
      <v-col cols="12" justify="center" align="center">
          <h1>
              Aciertos:{{getAciertos}}
          </h1>
            <h1>
              Fallos:{{getFallos}}
          </h1>
           <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="goToTests()"
    >
Volver a los tests    </v-btn>
      </v-col>
      
  </v-row>
</template>

<script>
export default {
data() {
    return {
        
    }
},
methods:{
goToTests(){
    this.$store.dispatch('resetTest')
    this.$router.push('/tests')
}
},
computed:{
    getAciertos(){
       return this.$store.getters.getAciertos
    },
    getFallos(){
       return this.$store.getters.getFallos
    }
}
}
</script>

<style>

</style>