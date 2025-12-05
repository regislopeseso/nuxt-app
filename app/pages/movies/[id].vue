<script setup>
  const route = useRoute();

  const { data } = await useFetch(
    `http://www.omdbapi.com/?apikey=4996b3da&i=${route.params.id}`,
    {
      pick: ["Plot", "Title"],
      key: `/movies/${route.params.id}`,
      onResponse({ request, response }) {
        if (response._data.Error === "Incorrect IMDb ID.") {
          showError({
            statusCode: 404,
            statusMessage: "Page Not Found",
          });
        }
      },
    }
  );

  useHead({
    title: data.value.Title,
    meta: [
      { name: "description", content: data.value.Plot },
      {
        property: "og:description",
        content: data.value.Plot,
      },
      { property: "og:image", content: data.value.Poster },
      {
        name: "twitter:card",
        content: `summary_large_image`,
      },
    ],
  });
</script>

<template>
  <h1>{{ data }}</h1>
</template>

<style scoped></style>
