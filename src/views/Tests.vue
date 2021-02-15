<template>
  <v-container fluid fill-height class="d-flex align-start">
    <v-row wrap>
      <v-col  cols="12" class="d-flex justify-center align-start flex-wrap">
        <testCard v-for="(test,index) in tests" :key="index" :test="test"></testCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import testCard from '../components/testCard'
export default {
components:{
  testCard
},
  data() {
    return {
      
    };
  },
  methods: {
      getTests(){
        this.$store.dispatch('getTests')
      }
    
  },
  computed:{
    tests(){
      return this.$store.getters.getTests
    }
  },
  watch:{
    
  },
  mounted() {
    this.getTests()
  },
};
</script>
