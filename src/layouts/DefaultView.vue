<template>

  <v-card
    class="mx-auto overflow-hidden"
    height="400"
    width="344"
  >
    

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text>
  </v-card>

</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

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

<style>
@media screen and (max-width: 600px) {
  header{
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
  }
  .header-item{
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    border-bottom: solid 2px var(--verde-claro);
    padding-left: 40%;
    padding-right: 40%;
  }
  #header{
    border-bottom: solid 2px var(--verde-claro);
    padding-left: 40%;
    padding-right: 40%;
  }
}
</style>
