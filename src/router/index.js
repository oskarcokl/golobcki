import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FrontPageView",
    component: () => import("../views/FrontPageView.vue"),
  },
  {
    path: "/oddaja",
    name: "Oddaja dostave",
    component: () => import("../views/NarociloPage.vue"),
  },
  {
    path: "/e2",
    name: "Example2",
    component: () => import("../views/Example2.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
