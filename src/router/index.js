import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/home/Index.vue";
import NewTest from "@/pages/newTest/Index.vue";
import Category from "@/pages/category/Index.vue";
import News from "@/pages/news/Index.vue";
import LoginPage from "@/pages/account/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/game/new",
    name: "newTest",
    component: NewTest,
  },
  {
    path: "/category/:category",
    name: "category",
    component: Category,
  },
  {
    path: "/news/:id",
    name: "news",
    component: News,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
