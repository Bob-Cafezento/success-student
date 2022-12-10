<template>
  <div>
    <header>
      <RouterLink to="/" id="header">
        <img src="@/assets/imagens/logo-branca.png" title="Logo" width="125" />
      </RouterLink>

      <div class="header-item">
        <RouterLink id="cabecalho" to="/login">Login</RouterLink>
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["logout"]),

    sair() {
      try {
        this.logout();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
