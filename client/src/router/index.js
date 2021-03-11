import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Documentation from "@/views/Documentation.vue";
import MyWall from "@/views/MyWall";
import Session from "../models/Session";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/documentation",
    name: "Doc",
    component: Documentation,
  },
  {
    path: "/mywall",
    name: "MyWall",
    component: MyWall,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log({ from, to });
  if (to.path == "/mywall" && !Session.user) {
    next("/login");
  } else {
    next(); //without a parameter
  }
});

export default router;
