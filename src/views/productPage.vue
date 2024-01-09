<script setup>
import { useRoute as routePara } from "vue-router";
import { productsContainer } from "@/composable/useProducts.js";
// console.log(route().params);
const productProperties = productsContainer.find(item=> item.id == routePara().params.id)
// const p = $route.params
// console.log($route);
</script>
<template>
  <div>
    <div>id: {{ productProperties.id }}</div>
    <div>name: {{ productProperties.name }}</div>
  </div>
</template>