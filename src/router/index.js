import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Invitation from "../views/Invitation.vue";
import newPages from "../views/newPage.vue";

const routes = [
  {
    path: "/:nama?",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Invitation,
  },
  {
    path: "/new-page",
    name: "newpage",
    component: newPages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
