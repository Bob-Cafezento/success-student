import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { auth } from "./auth";
import { conteudo } from "./conteudo";
import { formulario } from "./formulario";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "success-student",
});

const modules = {
  auth,
  conteudo,
  formulario,
};

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
});
