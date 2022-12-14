<template>
  <div :style="{background: $vuetify.theme.themes.light.background}">
    <header>
      <RouterLink to="/" id="header">
        <img src="@/assets/imagens/logo-branca.png" title="Logo" width="125" />
      </RouterLink>

      <div class="header-item">
        <RouterLink id="cabecalho" class="cinza" to="/login">Login</RouterLink>
      </div>
      <div class="header-item">
        <RouterLink id="cabecalho" to="/cadastro">Cadastro</RouterLink>
      </div>

      <div class="header-item">
        <RouterLink id="cabecalho" to="/conta">Conta</RouterLink>
      </div>

      <div class="header-item">
        <RouterLink id="cabecalho" to="/ajuda">Ajuda</RouterLink>
      </div>
      <div class="header-item">
        <RouterLink id="cabecalho" @click="sair" to="/login">Sair</RouterLink>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },

  methods: {
    ...mapActions('auth', ['logout']),

    sair() {
      try {
        this.logout()
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>

header {
  color: #9E9E9E;
  position: sticky;
  top: 0;
  background-color: var(--verde-escuro);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1%;
  font-size: 25px;
  box-shadow: 0 2px 20px var(--preto-claro);
}
.header-item {
  text-align: center;
  padding: 0;
}
#cabecalho{
  text-decoration: none;
  color: black;
}
header a{
  color: #9E9E9E;
}
.header-item:hover {
  text-shadow: 0 5px 10px #7eb3a9;
  color: #9E9E9E
}

@media screen and (max-width: 600px) {
}
</style>
