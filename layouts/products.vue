<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-5">
        <NuxtLink to="/" class="font-bold">Shoping March</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-3">
      <slot />
    </div>

    <footer class="container mx-auto flex justify-between border-t-2">
      <ul class="flex gap-5 px-5">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

  <style>
.router-link-exact-active {
  color: rgb(38, 153, 115);
}
</style>