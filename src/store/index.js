import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: { nombre: '' },
        test: {
            id: '',
            nombre: '',
            totalPreguntas: 30,
            actualPregunta: 0,
            preguntas: [],

        },


    },
    mutations: {
        loguearUsuario(state, user) {
            state.user.nombre = user.nombre
        },
        setTotalPreguntas(state, cantidad) {
            state.test.totalPreguntas = cantidad
        },
        addPreguntaToPreguntas(state, pregunta) {
            state.test.preguntas.push({
                id: pregunta.id,
                nombre: pregunta.nombre,
                pregunta: pregunta.pregunta,
                opciones: [...pregunta.opciones],
                contestada: false,
                imagen: pregunta.imagen,
                respuesta: ''
            })
        },
        addRespuestaToPregunta(state, respuesta) {
            state.test.respuestasPreguntas.push({
                idPregunta: respuesta.idPregunta,

            })
        },
        setRespuestaToPreguntaActual(state, respuesta) {
            let indexPregunta = state.test.preguntas.findIndex((pregunta) => pregunta.id == state.test.actualPregunta)
            state.test.preguntas[indexPregunta].respuesta = respuesta

        },
        setPreguntaToContestada(state) {
            let indexPregunta = state.test.preguntas.findIndex((pregunta) => pregunta.id == state.test.actualPregunta)
            state.test.preguntas[indexPregunta].contestada = true

        },

        nextPreguntaActual(state) {
            state.test.actualPregunta == state.test.totalPreguntas ? state.test.actualPregunta : state.test.actualPregunta += 1
        },

    },
    getters: {
        getUserName(state) {
            return state.user.nombre
        },
        getTotalPreguntas(state) {
            return state.test.totalPreguntas
        },
        getActualPregunta(state) {
            return state.test.actualPregunta
        },
        getPreguntas(state) {
            return state.test.preguntas
        },
        getPreguntaActual(state) {
            return state.test.preguntas.find((pregunta) => pregunta.id == state.test.actualPregunta)
        },
    },
    actions: {
        selectOpcionInPregunta(context, respuesta) {
            context.commit('setRespuestaToPreguntaActual',
                respuesta
            )
            context.commit('setPreguntaToContestada')
        }
    },
    modules: {}
})