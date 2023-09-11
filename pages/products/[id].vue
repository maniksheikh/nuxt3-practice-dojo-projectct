<template>
  <div>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;

const {data: product} = await useFetch(uri, {key: id});

if( !product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true})
}

definePageMeta({
  layout: "products",
});
</script>

<style> 
.router-link-exact-active {
  color: rgb(38, 153, 115);
}
h2 {
  font-size: 1.6rem;
  margin: 25px 15px;
}
p {
  margin: 25px 10px;
}
</style>