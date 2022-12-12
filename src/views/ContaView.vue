<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.usuario = { ...this.user };
  },
  data() {
    return {
      usuario: {},
      password: {},
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["updateUser", "deleteUser"]),

    async salvarPerfil() {
      try {
        if (this.usuario.username === this.user.username)
          delete this.usuario.username;
        this.updateUser(this.usuario);
        alert("Usuario salvo com sucesso");
      } catch (e) {
        console.log(e);
        alert("algum erro");
      }
    },
    async deletarConta() {
      try {
        this.deleteUser();
      } catch (e) {
        console.log(e);
        alert("algum erro");
      }
    },
    async alterarSenha() {
      try {
        await axios.post("auth/password/change/", this.auth);
        alert("Senha alterada com sucesso");
      } catch (e) {
        alert("algum erro");
      }
    },
  },
};
</script>

<template>
  <div id="abrangent">
    <h1>SUCCESS STUDENT</h1>
    <main id="conta">
      <div class="big-box-conta">
        <img src="@/assets/imagens/CONTA.png" width="200" />
        <h1 id="conteudo">Tenha controle da sua conta</h1>
      </div>
      <div class="big-box">
        <h2 class="line">Informações pessoais</h2>
        <div class="box">
          Nome de usuário
          <input type="text" v-model="usuario.username" /><br />
          Seu nome
          <input type="text" v-model="usuario.first_name" /><br />

          Seu sobrenome
          <input type="text" v-model="usuario.last_name" /><br />
          <button type="submit" class="botao" @click="salvarPerfil">
            Enviar
          </button>
        </div>
      </div>

      <div class="big-box">
        <h2 class="line">Altere sua senha</h2>
        <div class="box">
          Coloque a sua senha nova
          <input type="password" v-model="password.new_password1" /><br />

          Confirme a sua senha nova
          <input type="password" v-model="password.new_password2" /><br />

          <button type="submit" class="botao" @click="alterarSenha">
            Enviar
          </button>
          <button type="submit" class="botao-excluir" @click="deletarConta">
            Deletar conta
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

h1#conteudo{
  font-size: 60px;
}
.line {
  line-height: 1.2em;
  margin: 0.4em;
}

.box {
  background-color: var(--verde-claro);
  font-size: 35px;
  border-radius: 0 0 10px 10px;
  text-align: center;
  color: var(--preto-escuro);
  margin: 0%;
  width: 100%;
  box-shadow: none;
}
.big-box-conta {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 70px;
  padding-bottom: 30px;
}
.big-box {
  width: 35%;
  margin: 1%;
  display: flex;
  flex-flow: column;
  margin-left: 5%;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 5px 20px #282828;
}
.box:hover {
  box-shadow: none;
  cursor: pointer;
}
.big-box:hover {
  box-shadow: none;
  cursor: pointer;
}
.box input {
  border-radius: 5px;
  width: 100%;
  border: 2px solid #f0f0f0;
  padding: 10px;
}
.botao {
  background-color: #282828;
  border: 2px solid #282828;
  color: #fff;
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
}
.botao-excluir {
  color: white;
  background-color: rgb(176, 10, 15);
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
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
h2 {
  font-size: 40px;
}

@media screen and (max-width: 600px) {
  h1#conteudo{
  font-size: 30px;
  }
  h2{
    font-size: 25px;
  }
  img{
    margin-top: 20px;    
  }
  input{
    font-size: 20px;
  }
  .box{
    font-size: 22px;
    
  }
  .big-box{
    width: 90%;
    margin: none;
    margin-left: 0;
  }
  main{
    padding-bottom: 15px;
  }
}
</style>
