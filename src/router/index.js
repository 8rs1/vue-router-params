import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import ProductPage from "@/views/ProductPage.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
