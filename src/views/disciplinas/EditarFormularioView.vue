<template>
    <div id="abrangent">
        <h1>SUCCESS STUDENT</h1>
        <main>
            <div class="titulo">
                <h1>Titulo</h1> <input type="text">
            </div>
            <div class="titulo">
                <h2 class="start">Enunciado</h2><textarea></textarea>
            </div>
            <div>
                <h3 class="start">
                    <input type="radio" class="radio" name="pergunta"/>
                    Alternativa1<input type="text">
                </h3>
            </div>
            <div>
                <h3 class="start">
                    <input type="radio" class="radio" name="pergunta"/>
                    Alternativa2<input type="text">
                </h3>
            </div>
            <div>
                <h3 class="start">
                <input type="radio" class="radio" name="pergunta"/>
                Alternativa3<input type="text">
                </h3>
            </div>
            <div>
                <h3 class="start">
                    <input type="radio" class="radio" name="pergunta"/>
                    Alternativa4<input type="text">
                </h3>
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
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
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
  margin-left: 40px;
  margin-right: 20px;
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
</style>
