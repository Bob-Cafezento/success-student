import conteudoService from "@/api/conteudo";

export const conteudo = {
  namespaced: true,
  state: () => ({
    todosConteudos: [],
  }),
  mutations: {
    setConteudos(state, conteudos) {
      state.todosConteudos = conteudos;
    },
    esvaziarConteudos(state) {
      state.todosConteudos = [];
    },
  },
  actions: {
    async buscarConteudos({ commit }, disciplina) {
      const conteudos = await conteudoService.read(disciplina);
      commit("setConteudos", conteudos);
    },
    async criarConteudo({ dispatch }, conteudoInfo) {
      try {
        await conteudoService.create(conteudoInfo);
        dispatch("buscarConteudos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async atualizarConteudo({ dispatch }, { idConteudo, conteudoInfo }) {
      try {
        await conteudoService.update(idConteudo, conteudoInfo);
        await dispatch("buscarConteudos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async apagarConteudo({ dispatch }, idConteudo) {
      try {
        await conteudoService.delete(idConteudo);
        dispatch("buscarConteudos");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
