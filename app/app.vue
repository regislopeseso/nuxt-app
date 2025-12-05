<script setup>
  const siteTitle = "My movie site";
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} - ${siteTitle}`
        : siteTitle;
    },
  });
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
    </nav>
    <NuxtPage />
  </div>
</template>
