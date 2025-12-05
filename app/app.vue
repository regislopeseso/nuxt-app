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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
