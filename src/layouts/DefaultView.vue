<template>
  <div :style="{background: $vuetify.theme.themes.light.background}">
    <v-app-bar color="primary"  elevation="4" prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SUCCESS STUDENT</v-toolbar-title>
      <img src="@/assets/imagens/logo-branca.png" title="Logo" width="125"/>
    </v-app-bar>

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
img {
  background-color: transparent;
}
v-card {
  width: 100%;
  
}
@media screen and (max-width: 600px) {
}
</style>
