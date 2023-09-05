<template>
    <div>
      <header>
        <nav>
          <NuxtLink to="/">Nuxt Manik</NuxtLink>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <br>
          </ul>
        </nav>
      </header>

      <div>
        <slot/>
      </div>
     
    </div>
  </template>

  <style>
   .router-link-exact-active {
      color: rgb(78, 165, 136);
   }
</style>