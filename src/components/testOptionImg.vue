<template>
<v-row class="d-flex justify-center">
    <v-col cols="2" class="d-flex justify-start">
<div :class="clase"  >{{opcion.opcion}}</div>

    </v-col >
    <v-col cols="10" class="d-flex justify-start align-center ma-0 ">
<p><slot></slot></p>

    </v-col>
</v-row>



</template>

<script>
export default {
props:['opcion'],
data() {
    return {
        clase: 'numberCircle'
    }
},
computed:{
    elegida(){
        return this.opcion.elegida
    }
},
watch:{
    elegida(){
        if (this.opcion.correcta) {
            this.clase='numberCircleAcierto'
        }else{
                        this.clase='numberCircleFallo'

        }
    }
}
}
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
</style>