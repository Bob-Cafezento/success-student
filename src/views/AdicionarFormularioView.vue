<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>
    <main>
      <div class="box">
        Selecione qual será a disciplina para este Formulário<br />
        <select v-model="disciplina">
          <option value="Português">Português</option>
          <option value="Matemática">Matemática</option>
          <option value="História">História</option>
          <option value="Geografia">Geografia</option></select
        ><br />
      </div>
      <div class="box">
        Selecione qual será a conteúdo para este Formulário<br />
        <br />
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="4" data-app>
            <v-autocomplete
              v-model="formulario.conteudo"
              :items="conteudos"
              solo
              filled
              label="Conteúdos"
            ></v-autocomplete>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </div>
      <div class="box">
        Adicione um Título para este Formulário<br />
        <input id="text" type="text" v-model="formulario.titulo" />
      </div>
      <div v-for="(pergunta, index) in perguntas" :key="index" class="box">
        Adicione mais uma pergunta<br />
        <textarea
          type="text"
          v-model="perguntas[index].texto_pergunta"
        ></textarea
        ><br />

        Adicione as alternativas<br />
        <div class="alternativa">
          <input
            id="text"
            type="text"
            v-model="alternativas[index].alternativa1.texto_alternativa"
          />
          <input
            type="checkbox"
            v-model="alternativas[index].alternativa1.esta_correta"
            class="radio"
            :value="true"
            :name="'alternativa' + index"
          />
          <br />
        </div>
        <div class="alternativa">
          <input
            id="text"
            type="text"
            v-model="alternativas[index].alternativa2.texto_alternativa"
          />
          <input
            type="checkbox"
            v-model="alternativas[index].alternativa2.esta_correta"
            class="radio"
            :value="true"
            :name="'alternativa' + index"
          />
          <br />
        </div>
        <div class="alternativa">
          <input
            id="text"
            type="text"
            v-model="alternativas[index].alternativa3.texto_alternativa"
          />
          <input
            type="checkbox"
            v-model="alternativas[index].alternativa3.esta_correta"
            class="radio"
            :value="true"
            :name="'alternativa' + index"
          />
          <br />
        </div>
        <div class="alternativa">
          <input
            id="text"
            type="text"
            v-model="alternativas[index].alternativa4.texto_alternativa"
          />
          <input
            type="checkbox"
            v-model="alternativas[index].alternativa4.esta_correta"
            class="radio"
            :value="true"
            :name="'alternativa' + index"
          />
          <br />
        </div>
        <br />

        Caso necessário, remova a pergunta:<br />
        <input
          type="submit"
          id="text"
          value="Excluir"
          class="excluir"
          @click="deletarPergunta(index)"
        />
      </div>
      <div class="box">
        Adicione mais uma pergunta
        <br />
        <input
          @click="adicionarPergunta"
          type="submit"
          class="submit"
          value="Adicionar"
        />
      </div>

      <div class="box">
        Quando o Formulário e o conteúdo estiverem prontos, clique abaixo para
        salvar:<br />
        <input
          type="submit"
          @click="submitForm"
          class="submit"
          value="Salvar"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    formulario: {},
    disciplina: "",
    conteudos: [],
    perguntas: [],
    alternativas: [],
  }),
  watch: {
    async disciplina(novaDisciplina, antigaDisciplina) {
      if (novaDisciplina !== antigaDisciplina) {
        this.conteudos = [];
        await this.buscarConteudos(novaDisciplina);
        for (let conteudo in this.todosConteudos) {
          this.conteudos.push(this.todosConteudos[conteudo].nome);
        }
      }
    },
  },
  computed: {
    ...mapState("conteudo", ["todosConteudos"]),
  },
  methods: {
    ...mapActions("conteudo", ["buscarConteudos"]),

    adicionarPergunta() {
      this.perguntas.push({});
      this.alternativas.push({
        alternativa1: {},
        alternativa2: {},
        alternativa3: {},
        alternativa4: {},
      });
    },
    deletarPergunta(perguntaDeletada) {
      this.perguntas = this.perguntas.filter(
        (x, indexPergunta) => indexPergunta != perguntaDeletada
      );
      this.alternativas = this.alternativas.filter(
        (x, indexAltertivas) => indexAltertivas != perguntaDeletada
      );
    },
    submitForm() {
      console.log(this.perguntas);
      console.log(this.alternativas);
    },
  },
};
</script>

<style scoped>
.resumo {
  display: flex;
  align-items: flex-start;
  white-space: pre-line;
}
.box {
  width: 100%;
}
.titulo {
  font-size: 50px;
}
.submit {
  background-color: rgb(18, 151, 177);
}
.excluir {
  background-color: rgb(176, 10, 15);
  color: white;
}
.alternativa {
  display: flex;
  align-items: center;
  justify-content: center;
}
.radio {
  size-adjust: border;
  width: 42px;
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  font-family: Garamond;
  font-size: 30px;
  box-shadow: none;
}

h1 {
  padding: 0;
  margin-top: 20px;
}
h3 {
  margin-top: 0;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 20px var(--preto-claro);
}
select {
  margin-top: 20px;
  width: 400px;
  height: 50px;
  border: none;
  font-family: Garamond;
  font-size: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 20px var(--preto-claro);
  background-color: white;
}
select:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
input {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 400px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-family: Garamond;
  font-size: 30px;
  box-shadow: 0 2px 20px var(--preto-claro);
  background-color: white;
}
input#text:hover {
  box-shadow: 0 4px 40px var(--preto-claro);
}
textarea {
  margin: 30px;
  width: 60%;
  height: 200px;
  border-radius: 10px;
  font-family: Garamond;
  font-size: 20px;
  box-shadow: 0 4px 20px var(--preto-claro);
  background-color: white;
}
textarea:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-track {
  background: var(--branco-esverdeado);
  border-left: 1px solid var(--preto-claro);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--verde-claro);
  border-radius: 7px;
  border: 2px solid var(--preto-claro);
}
</style>
