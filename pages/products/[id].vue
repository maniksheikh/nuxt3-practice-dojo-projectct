<template>
  <div>
    <h2>Products details for {{ id }}</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vero quo
      qui! Consequatur, modi! Voluptatibus quasi quibusdam blanditiis deleniti
      facere.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style scoped>
h2 {
  font-size: 1.6rem;
  margin: 25px 15px;
}
p {
  margin: 25px 10px;
}
</style>