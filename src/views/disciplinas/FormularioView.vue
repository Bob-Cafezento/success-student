<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>
    <main>
      <h1>Titulo</h1>
      <h2 class="start">Enunciado</h2>
      <h3 class="start">
        <input type="radio" class="radio" name="pergunta"/>
        Alternativa1
      </h3>
      <h3 class="start">
        <input type="radio" class="radio" name="pergunta"/>
        Alternativa2
      </h3>
      <h3 class="start">
        <input type="radio" class="radio" name="pergunta"/>
        Alternativa3
      </h3>
      <h3 class="start">
        <input type="radio" class="radio" name="pergunta"/>
        Alternativa4
      </h3>

      <div class="box">
        Quando o Conteúdo estiver pronto, clique abaixo para salvar:<br /><br />
            <input
            type="submit"
            @click="adicionarConteudo"
            class="submit"
            value="Salvar"
            />
      </div>

      <div class="button" @click="$router.push('/editarformulario')">
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
.box{
    width: 100%;
    align-self: center;
}
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
  display: flex;
  align-items: center;
  
}
h2 {
  font-size: 32px;
}
h3 {
  font-size: 25px;
  margin-left: 20px;
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
</style>
