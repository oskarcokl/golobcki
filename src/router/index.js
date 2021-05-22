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
    path: "/e1",
    name: "Example1",
    component: () => import("../views/Example1.vue"),
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
