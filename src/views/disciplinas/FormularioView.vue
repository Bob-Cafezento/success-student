<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>
    <main>
      <h1>Titulo</h1>
      <h2 class="start">Enunciado</h2>
      <h3 class="start"><input type="radio" class="radio" name="pergunta"/>Alternativa1</h3>
      <h3 class="start"><input type="radio" class="radio" name="pergunta"/>Alternativa2</h3>
      <h3 class="start"><input type="radio" class="radio" name="pergunta"/>Alternativa3</h3>
      <h3 class="start"><input type="radio" class="radio" name="pergunta"/>Alternativa4</h3>
      <div class="button" @click="router.push('/editarformulario')">
        Editar Formulário
      </div>
    </main>
  </div>
</template>

<script>
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
  align-self: center;
  padding: 20px;
}
.button:hover{
  box-shadow: 0 4px 60px var(--preto-claro);
}
main {
  flex-flow: column;
}
.start {
  align-self: flex-start;
  margin: 20px;
}
h2 {
  font-size: 32px;
}
h3 {
  font-size: 25px;
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
</style>
