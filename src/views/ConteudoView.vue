<template>
  <div id="abrangent">
    <main class="resumo">
      <h1 class="titulo">titulo</h1>
      <br />
      <h4 class="paragrafo">paragrafo</h4>

      <div class="box" @click="$router.push('/adicionarformulario')">
        Clique aqui para adicionar um formulário ao seu conteúdo <br />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.box {
  width: 90%;
  color: black;
}
</style>
