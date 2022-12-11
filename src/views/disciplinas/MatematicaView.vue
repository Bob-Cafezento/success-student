<template>
  <div id="abrangent">
    <main class="resumo">
      <div class="box" @click="$router.push('/adicionarformulario')">
        Clique aqui para adicionar um formulário a um dos conteúdos <br />
      </div>
      <br />
      <div v-for="(conteudo, index) in todosConteudos" :key="index" class="box">
        <h1 class="titulo">{{ conteudo.nome }}</h1>
        <br />
        <h4 class="paragrafo">{{ conteudo.paragrafo }}</h4>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  created() {
    this.esvaziarConteudos();
    this.buscarConteudos("Matemática");
  },
  computed: {
    ...mapState("conteudo", ["todosConteudos"]),
  },
  methods: {
    ...mapMutations("conteudo", ["esvaziarConteudos"]),
    ...mapActions("conteudo", ["buscarConteudos"]),
  },
};
</script>

<style scoped>
.box {
  width: 90%;
  color: black;
}
</style>
