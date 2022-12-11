<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    auth: {},
  }),
  methods: {
    ...mapActions("auth", ["login"]),

    async logarUsuario() {
      try {
        await this.login(this.auth);
        this.$router.push({ path: "/" });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="body">
    <div class="container">
      <div class="header">
        <h2>Entre novamente no Success Student</h2>
      </div>

      <form id="form" class="form" @submit.prevent="logarUsuario">
        <div class="form-control">
          <label for="email">Username</label>
          <input
            type="text"
            v-model="auth.username"
            id="username"
            @keyup.enter="logarUsuario"
            placeholder="Digite seu username"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="password"
            v-model="auth.password"
            @keyup.enter="logarUsuario"
            placeholder="Digite sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <button type="submit" class="botao">Enviar</button>
        <div id="cadastro" @click="$router.push('/cadastro')">
          Ainda não tem conta?
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background: url(@/assets/imagens/grupo-de-estudo-ConversImagem.jpg) no-repeat
    center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  opacity: 0.9;
}
div#cadastro {
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.container {
  background-color: #3b6863;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 100%;
  overflow: hidden;
}

.header {
  background-color: #eee;
  padding: 20px;
  color: #000000;
}

h2 {
  line-height: 1.4em;
}

.form {
  padding: 20px;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

.form-control label {
  display: inline-block;
  margin-bottom: 5px;
}

.form-control input {
  border: 2px solid #f0f0f0;
  display: block;
  border-radius: 10px;
  font-size: 14px;
  width: 100%;
  padding: 10px;
}

.form-control i {
  position: absolute;
  top: 45px;
  right: 10px;
  visibility: hidden;
}

.form-control small {
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form button {
  background-color: #8f8f8f;
  border: 2px solid #8f8f8f;
  color: #fff;
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
