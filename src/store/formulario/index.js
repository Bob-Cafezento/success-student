import formularioService from "@/api/formulario";

export const formulario = {
  namespaced: true,
  state: () => ({
    todosFormularios: [],
  }),
  mutations: {
    setFormularios(state, formularios) {
      state.todosFormularios = formularios;
    },
    esvaziarFormularios(state) {
      state.todosFormularios = [];
    },
  },
  actions: {
    async buscarFormularios({ commit }) {
      const formularios = await formularioService.read();
      commit("setFormularios", formularios);
    },
    async criarFormulario({ dispatch }, formInfo) {
      try {
        await formularioService.create(formInfo);
        dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarFormulario({ dispatch }, { idForm, formInfo }) {
      try {
        await formularioService.update(idForm, formInfo);
        await dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async apagarFormulario({ dispatch }, idForm) {
      try {
        await formularioService.delete(idForm);
        dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
