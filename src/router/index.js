import { createRouter, createWebHistory } from "vue-router";
import Homeview from "~/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homeview,
  },
  {
    path: "/login",
    name: "Sign",
    component: () => import("~/views/SignInView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
