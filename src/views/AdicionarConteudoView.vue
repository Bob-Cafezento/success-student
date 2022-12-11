<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>

    <main>
      <h2>Adicione conteúdo</h2>
      <br />
      <h3>
        Nesta página escreva um novo resumo, e informe a que matéria o mesmo
        pertence:
      </h3>
      <br />
      <div class="box">
        <h3>
          Selecione qual será a disciplina do conteúdo que você deseja adicionar
          ao site:
        </h3>
        <br />
        <select v-model="conteudo.disciplina">
          <option value="Português">Português</option>
          <option value="Matemática">Matemática</option>
          <option value="História">História</option>
          <option value="Geografia">Geografia</option></select
        ><br />
        <h3>Adicione um título</h3>
        <br />
        <input type="text" v-model="conteudo.nome" /><br />
        <h3>Adicione um Paragráfo</h3>
        <br />
        <textarea v-model="conteudo.paragrafo" wrap="hard"></textarea><br />
      </div>
      <div class="box">
        Quando o Conteúdo estiver pronto, clique abaixo para salvar:<br /><br />
        <input
          type="submit"
          @click="adicionarConteudo"
          class="submit"
          value="Salvar"
        />
      </div>
    </main>

    <h1>Visão Prévia do conteúdo</h1>

    <main class="resumo">
      <h4 class="paragrafo">{{ conteudo.disciplina }}</h4>
      <br />
      <h1 class="titulo">{{ conteudo.titulo }}</h1>
      <br />
      <h4 class="paragrafo">{{ conteudo.paragrafo }}</h4>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    conteudo: {},
  }),
  methods: {
    ...mapActions("conteudo", ["criarConteudo"]),

    adicionarConteudo() {
      try {
        this.criarConteudo(this.conteudo);
        alert("Conteúdo adicionado com sucesso!");
        this.$router.push({ name: this.conteudo.disciplina });
        this.conteudo = {};
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
}
.resumo {
  white-space: pre-line;
}
.titulo {
  font-size: 50px;
}
.paragrafo {
  font-size: 35px;
}
h1 {
  padding: 0;
  margin-top: 20px;
}
select {
  width: 400px;
  height: 50px;
  border: none;
  font-family: Garamond;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 20px var(--preto-claro);
  background-color: white;
}
select:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
input {
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-family: Garamond;
  font-size: 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 20px var(--preto-claro);
  background-color: white;
}
input:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
textarea {
  width: 1000px;
  height: 100px;
  border-radius: 10px;
  font-family: Garamond;
  font-size: 30px;
  box-shadow: 0 4px 20px var(--preto-claro);
  background-color: white;
}
textarea:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
</style>
