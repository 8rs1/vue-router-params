<script setup>
import { productsContainer } from "@/composable/useProducts.js";
</script>
<template>
<div>
  <div v-for="product in productsContainer" :key="product.id">
    <RouterLink :to="'/product/'+product.id">{{ product.name }}</RouterLink>
  </div>
  <!-- <div>
    <RouterLink to="/product">کنسول بازی</RouterLink>
  </div>
  <div>
    <RouterLink to="/product">موبایل</RouterLink>
  </div>
  <div>
    <RouterLink to="/product">لوازم جانبی</RouterLink>
  </div> -->
</div>  
</template>
<style scoped>

</style>