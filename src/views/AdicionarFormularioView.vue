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
        <v-spacer>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="4" data-app>
              <v-autocomplete
                v-model="formulario.conteudo"
                :items="conteudos"
                hide-details
                solo
                filled
                label="Conteúdos"
              ></v-autocomplete>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-spacer>
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
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    formulario: {
      perguntas: [],
    },
    perguntas: [],
    alternativas: [],
    conteudos: [],
    disciplina: "",
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

    async submitForm() {
      try {
        for (let i = 0; i < this.perguntas.length; i++) {
          this.perguntas[i].alternativas.push(
            this.alternativas[i].alternativa1
          );
          this.perguntas[i].alternativas.push(
            this.alternativas[i].alternativa2
          );
          this.perguntas[i].alternativas.push(
            this.alternativas[i].alternativa3
          );
          this.perguntas[i].alternativas.push(
            this.alternativas[i].alternativa4
          );
        }
        this.formulario["perguntas"] = this.perguntas;
        console.log(this.formulario);
        await axios.post("api/formularios/", this.formulario);
      } catch (e) {
        console.log(e);
      }
    },
    adicionarPergunta() {
      this.perguntas.push({
        alternativas: [],
      });
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
  },
};
</script>

<style scoped>
.box {
  width: 100%;
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin: 0;
}
.small {
  width: 11%;
  border: none;
}
.small:hover {
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
  margin-top: 30px;
  margin-bottom: 30px;
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
@media screen and (max-width: 600px) {
  h3 {
    font-size: 25px;
  }
  h1 {
    font-size: 15px;
  }
  input {
    width: 80%;
    font-size: 25px;
  }
  select {
    width: 80%;
    font-size: 20px;
  }
  textarea {
    width: 90%;
    font-size: 20px;
  }
  main {
    width: 80%;
  }
}
</style>
