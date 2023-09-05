<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Manik March</NuxtLink>
      </nav>
    </header>

    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

  <style>
.router-link-exact-active {
  color: rgb(78, 165, 136);
}
</style>