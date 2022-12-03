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
  {
    path: "/register",
    name: "Register",
    component: () => import("~/views/RegisterView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 Notfound",
    component: () => import("~/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
