import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AjudaView from "../views/AjudaView.vue";
import ContaView from "../views/ContaView.vue";
import CadastroView from "../views/CadastroView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultView.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/conta",
        name: "conta",
        component: ContaView,
      },
      {
        path: "/ajuda",
        name: "ajuda",
        component: AjudaView,
      },
      {
        path: "/historia",
        name: "História",
        component: () => import("../views/disciplinas/HistoriaView.vue"),
      },
      {
        path: "/geografia",
        name: "Geografia",
        component: () => import("../views/disciplinas/GeografiaView.vue"),
      },
      {
        path: "/matematica",
        name: "Matemática",
        component: () => import("../views/disciplinas/MatematicaView.vue"),
      },
      {
        path: "/portugues",
        name: "Português",
        component: () => import("../views/disciplinas/PortuguesView.vue"),
      },
      {
        path: "/adicionarconteudo",
        name: "adicionarconteudo",
        component: () => import("../views/AdicionarConteudoView.vue"),
      },
      {
        path: "/adicionarformulario",
        name: "adicionarformulario",
        component: () => import("../views/AdicionarFormularioView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/BlankView.vue"),
    meta: {
      auth: false,
    },
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginView,
      },
      {
        path: "/cadastro",
        name: "cadastro",
        component: CadastroView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!store.state.auth.loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
