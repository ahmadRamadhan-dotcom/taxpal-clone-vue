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
    name: "Sign In",
    component: () => import("~/views/SignInView.vue"),
  },
  {
    path: "/register",
    name: "Sign Up",
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

router.beforeEach((to, from, next) => {
  if (to.path != "/") {
    document.title = `${to.name} - Taxpal`;
  } else if (to.name === "404 Notfound") {
    document.title = "404: This page colud not be found";
  }
  next();
});

export default router;
