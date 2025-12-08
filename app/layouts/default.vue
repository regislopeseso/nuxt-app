<script setup>
  const isLoggedIn = useIsLoggedIn();
</script>
<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>

      <NuxtLink to="/movies">Movies</NuxtLink>

      <NuxtLink
        to="https://vueschool.io"
        target="_"
        >Vue School</NuxtLink
      >

      <NuxtLink
        v-if="!isLoggedIn"
        to="/login"
        >Login</NuxtLink
      >

      <a
        v-else
        @click.prevent="isLoggedIn = false"
        href="#"
        to="/login"
        >Logout Test</a
      >
    </nav>
    <slot></slot>
  </div>
</template>
