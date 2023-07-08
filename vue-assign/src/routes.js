import { createWebHistory, createRouter } from "vue-router";
import HomeComp from "./components/HomeComp.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
