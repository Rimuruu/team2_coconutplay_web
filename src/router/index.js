import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/home/Index.vue";
import NewTest from "@/pages/newTest/Index.vue";
import Category from "@/pages/category/Index.vue";
import PrivatePage from "@/pages/category/Private.vue";
import News from "@/pages/news/Index.vue";
import LoginPage from "@/pages/account/Login.vue";
import RegisterPage from "@/pages/account/Register.vue";
import ProfilePage from "@/pages/account/Profile.vue";
import AdminPage from "@/pages/account/Admin.vue";

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
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/profile/me",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
  },
  {
    path: "/private",
    name: "private",
    component: PrivatePage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
