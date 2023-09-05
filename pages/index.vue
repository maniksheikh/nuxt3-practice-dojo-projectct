<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Manik</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
         <a href="/about">Normal lik -- about page</a>
        </ul>
      </nav>
    </header>
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam
      facere officiis quas nemo eaque quasi pariatur ullam ad recusandae!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iste a
      ullam architecto magni temporibus cum veritatis ipsam consequatur aliquid.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
 li  {
    list-style: none;
    text-decoration: none;
}
     h2 {
        margin-bottom: 20px 10px;
        font-size: 2rem;
     }
     p {
        margin: 20px 10px;
     }
</style>