import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    logguedUser: {
      created_at: "",
      email: "",
      id: "",
      name: "",
      permisos: [],
      updated_at: "",
    },
    test: {
      id: "",
      name: "",
      totalPreguntas: 0,
      actualPregunta: 0,
      preguntas: [],
    },
    testsPermisoModalidadActual:[],
    modalidadEscogida: 0,
  },
  mutations: {
    setloguedUser(state, user) {
      try {
        state.logguedUser = user;
        return { success: true, msg: "usuario almacenado ", errorCode: 0 };
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    setModalidadEscogida(state, codigoModalidad) {
      try {
        state.modalidadEscogida = codigoModalidad;
        return { success: true, msg: "modalidad cambiada", errorCode: 0 };
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    setPermisosUser(state, permisos) {
      try {
        let permisosArray = [];
        permisos.forEach((permiso) => {
          permisosArray.push(permiso);
        });
        Vue.set(state.logguedUser.permisos, "permisos", [...permisosArray]);

        return { success: true, msg: "permisos agregados ", errorCode: 0 };
      } catch (error) {
        console.log(error);
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    setTests(state, tests) {
      try {
        let testsArray = [];
        tests.forEach((test) => {
          testsArray.push(test);
        });
        Vue.set(state, "testsPermisoModalidadActual", [...testsArray]);

        return { success: true, msg: "permisos agregados ", errorCode: 0 };
      } catch (error) {
        console.log(error);
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    setModalidades(state, modalidades) {
      try {
        let modalidadesArray = [];
        modalidades.forEach((permiso) => {
          modalidadesArray.push(permiso);
        });
        const modalidad = state.logguedUser.permisos.findIndex(
          (permiso) => permiso.id == router.currentRoute.params.id
        );
        Vue.set(state.logguedUser.permisos[modalidad], "modalidades", [
          ...modalidadesArray,
        ]);
        return { success: true, msg: "permisos agregados ", errorCode: 0 };
      } catch (error) {
        console.log(error);
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    setTotalPreguntas(state, cantidad) {
      state.test.totalPreguntas = cantidad;
    },
    addPreguntaToPreguntas(state, pregunta) {
      state.test.preguntas.push({
        id: pregunta.id,
        nombre: pregunta.nombre,
        pregunta: pregunta.pregunta,
        opciones: [...pregunta.opciones],
        contestada: false,
        imagen: pregunta.imagen,
        respuesta: "",
      });
    },
    addRespuestaToPregunta(state, respuesta) {
      state.test.respuestasPreguntas.push({
        idPregunta: respuesta.idPregunta,
      });
    },
    setRespuestaToPreguntaActual(state, respuesta) {
      let indexPregunta = state.test.preguntas.findIndex(
        (pregunta) => pregunta.id == state.test.actualPregunta
      );
      state.test.preguntas[indexPregunta].respuesta = respuesta;
    },
    setPreguntaToContestada(state) {
      let indexPregunta = state.test.preguntas.findIndex(
        (pregunta) => pregunta.id == state.test.actualPregunta
      );
      state.test.preguntas[indexPregunta].contestada = true;
    },

    nextPreguntaActual(state) {
      state.test.actualPregunta == state.test.totalPreguntas
        ? state.test.actualPregunta
        : (state.test.actualPregunta += 1);
    },
  },
  getters: {
    getTests(state){
return state.testsPermisoModalidadActual
    },
    getModalidadEscogida(state) {
      return state.logguedUser.modalidadEscogida;
    },
    getUserName(state) {
      return state.logguedUser.name;
    },
    getPermisos(state) {
      return state.logguedUser.permisos;
    },
    getModalidades(state) {
      const modalidad = state.logguedUser.permisos.findIndex(
        (permiso) => permiso.id == router.currentRoute.params.id
      );

      return state.logguedUser.permisos[modalidad].modalidades;
    },
    getTotalPreguntas(state) {
      return state.test.totalPreguntas;
    },
    getActualPregunta(state) {
      return state.test.actualPregunta;
    },
    getPreguntas(state) {
      return state.test.preguntas;
    },
    getPreguntaActual(state) {
      return state.test.preguntas.find(
        (pregunta) => pregunta.id == state.test.actualPregunta
      );
    },
  },
  actions: {
    selectOpcionInPregunta(context, respuesta) {
      context.commit("setRespuestaToPreguntaActual", respuesta);
      context.commit("setPreguntaToContestada");
    },
    async getLoggedUser(context) {
      try {
        let response = await Vue.axios.get("/api/user");
        if (!response.data) {
          return {
            success: false,
            msg: "error al guardar datos de logueo",
            errorCode: 4,
          };
        }

        context.commit("setloguedUser", response.data);
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async login(context, userCredential) {
      try {
        let response = await Vue.axios.post("/api/login", userCredential);
        if (!response.data.token)
          return { success: false, msg: "error al loguearse", errorCode: 3 };
        Vue.$cookies.set("Authorization", `Bearer ${response.data.token}`);
        await context.dispatch("getLoggedUser");

        router.push("/seleccionPermiso");
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async selectModalidad(context, codigoModalidad) {
      try {
        await context.commit("setModalidadEscogida", codigoModalidad);
        router.push("/tests");
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async register(context, userCredential) {
      try {
        let response = await Vue.axios.post("/api/register", userCredential);
        if (!response.data.name)
          return { success: false, msg: "error al registrarse", errorCode: 2 };
        const user = {
          email: userCredential.email,
          password: userCredential.password,
        };
        context.dispatch("login", user);
        return { success: true, msg: "registrado correctamente", errorCode: 0 };
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async getPermisos(context) {
      try {
        let response = await Vue.axios.get("/api/getPermisos");
        if (!response.data[0].name)
          return {
            success: false,
            msg: "error al traer los permisos",
            errorCode: 7,
          };

        await context.commit("setPermisosUser", response.data);
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async getModalidades(context) {
      try {
        let response = await Vue.axios.get("/api/getModalidades");
        if (!response.data[0].name)
          return {
            success: false,
            msg: "error al traer las modalidades",
            errorCode: 9,
          };

        await context.commit("setModalidades", response.data);
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
    async getTests(context) {
      try {
        let response = await Vue.axios.get("/api/getTests");
        if (!response.data[0].name)
          return {
            success: false,
            msg: "error al traer las modalidades",
            errorCode: 9,
          };

        await context.commit("setTests", response.data);
      } catch (error) {
        return { success: false, msg: "error ", errorCode: 5 };
      }
    },
  },
  modules: {},
});
