<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),

    async criarUsuario() {
      try {
        await this.register(this.user);
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
        <h2>Crie uma conta no Success Student</h2>
      </div>

      <form id="form" class="form">
        <div class="form-control">
          <label for="username">Nome da conta</label>
          <input
            type="text"
            v-model="user.username"
            id="username"
            @keyup.enter="criarUsuario"
            placeholder="Digite seu username"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="email">E-mail</label>
          <input
            type="text"
            v-model="user.email"
            id="email"
            @keyup.enter="criarUsuario"
            placeholder="Digite seu E-mail"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="password"
            v-model="user.password1"
            id="password1"
            @keyup.enter="criarUsuario"
            placeholder="Digite sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <div class="form-control">
          <label for="password">Confirme a sua senha</label>
          <input
            type="password"
            v-model="user.password2"
            id="password2"
            @keyup.enter="criarUsuario"
            placeholder="Confirme a sua senha"
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small></small>
        </div>

        <button type="submit" class="botao" @click.prevent="criarUsuario">
          Enviar
        </button>
        <div id="cadastro" @click="$router.push('/login')">Já tem conta?</div>
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
  
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 400px;
  max-width: 100%;
  overflow: hidden;
  
}

.header {
  background-color: white;
  padding: 20px;
  color: #000000;
}

h2 {
  line-height: 1.4em;
}

.form {
  padding: 20px;
  background-color: #3b6863;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 0;
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
