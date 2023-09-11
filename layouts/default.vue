<template>
  <div>
    <header class="shawdow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-xl">Shoping Cart</NuxtLink>
        <ul class="flex gap-5">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li>
            <NuxtLink
              to="/products"
              class="bg-green-600 px-4 py-2 rounded-md text-sm text-white"
              >Products</NuxtLink
            >
          </li>
          <br />
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

  <style>
.router-link-exact-active {
  color: rgb(78, 165, 136);
}
</style>