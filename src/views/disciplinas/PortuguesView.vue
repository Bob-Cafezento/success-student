<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>
    <main class="resumo">
      <div class="box" id="primeiro" @click="$router.push('/adicionarformulario')">
        Clique aqui para adicionar um formulário ao seu conteúdo <br />
      </div>
      <br />
      <div v-for="(conteudo, index) in todosConteudos" :key="index" class="box">
        <h1 class="titulo">{{ conteudo.nome }}</h1>

        <br />
        <h4 class="paragrafo">{{ conteudo.paragrafo }}</h4>

        <div class="button" @click="$router.push('/formulario')">
          Vamos usar a cabeça, clique aqui, e faça um questionário rápido para ver se entendeu o assunto
        </div>
      </div>
      <!--Dialog form-->
      <v-row justify="center">
        <v-dialog
          class="activator"
          v-model="dialog"
          persistent
          max-width="700px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="botao" color="primary" dark v-bind="attrs" v-on="on">
              Editar Conteúdo
            </v-btn>
          </template>
          <v-card class="card">
            <v-card-title>
              <span class="text-h5">Editando Conteúdo</span>
            </v-card-title>
            <v-card-text>
              <v-row class="center">
                <v-col>
                  <v-select
                    :items="['conteudo1', 'conteudo2', 'conteudo3']"
                    label="Qual é  conteudo"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Titulo" required></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    class="paragrafo"
                    label="Paragrafo"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-col class="center">
                <v-btn elevation="2" id="deletar">Deletar</v-btn>
              </v-col>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </main>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false,
    };
  },
  created() {
    this.esvaziarConteudos();
    this.buscarConteudos("Português");
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

.button{
  font-size: 25px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: var(--verde-claro);
  color: black;
  margin-top: 30px;
}
.button:hover{
  box-shadow: 0 4px 60px var(--preto-claro);
}
.box {
  width: 90%;
  color: black;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  
}
.box#primeiro{
  margin-top: 20px;
}
.activator {
  margin: 100px;
}
main {
  padding-bottom: 50px;
}
.v-card__title {
  display: flex;
  justify-content: center;
}
.center {
  display: flex;
  justify-content: center;
}
.botao{
  margin-top: 35px;
}
#deletar{
  background-color: rgb(176, 10, 15);
  color: white;
}
input {
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 0;
  font-family: Garamond;
  font-size: 30px;
  margin-bottom: 20px;
  box-shadow: 0 2px 20px var(--preto-claro);
}
input:hover {
  box-shadow: 0 4px 60px var(--preto-claro);
}
</style>
