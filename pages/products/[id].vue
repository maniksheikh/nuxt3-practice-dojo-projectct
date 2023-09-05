<template>
  <div>
    <h2>Products details for {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, impedit.
      Dolorem molestiae consectetur aliquid non saepe necessitatibus dicta
      voluptatem voluptatum tenetur quod quos, quae nobis omnis sint obcaecati
      expedita quisquam.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
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