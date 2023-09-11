<template>
  <div class="mt-7 max-w-sm mx-auto text-center card border-2 bg-white pb-5">
    <p class="mt-7 text-8xl font bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7 text-xl pb-3">{{ error.message }}</p>
    <button class="p-1 bg-green-600 text-white rounded-md" @click="handleClearError">Go Home....</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: '/'})

</script>

<style scoped>
</style>