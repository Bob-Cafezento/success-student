import Vue from "vue";
import Vuetify from "vuetify/lib/framework";


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3b6863",
        secondary: "#7eb3a9",
        background: "#7eb3a9",
      },
    //   dark: {
    //     primary: "#3b6863",
    //     secondary: "#7eb3a9",
    //     background: "#7eb3a9",
    //   },
    },
  },
});
