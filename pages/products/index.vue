<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
         <div v-for="p in products" :key="p">
            <ProductCart :product="p"></ProductCart>
         </div>
    </div>
  </div>
</template>

<script setup>

import ProductCart from '~/components/ProductCart.vue';


definePageMeta({
  layout: "products",
});

useHead({
  title: 'Nuxt 3 Shoping | March',
  meta: [
    {name: 'description', content: ' Nuxt 3 March'}
  ]
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style >
.router-link-exact-active {
  color: rgb(38, 153, 115);
}
h2 {
  margin: 25px 15px;
}
p {
  font-size: 1rem;
  margin: 20px 15px;
}
</style>