import authService from "@/api/auth";

export const auth = {
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
      const formularios = await authService.read();
      commit("setFormularios", formularios);
    },
    async criarFormulario({ dispatch }, formInfo) {
      try {
        await authService.create(formInfo);
        dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarFormulario({ dispatch }, { idForm, formInfo }) {
      try {
        await authService.update(idForm, formInfo);
        await dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async apagarFormulario({ dispatch }, idForm) {
      try {
        await authService.delete(idForm);
        dispatch("buscarFormularios");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
