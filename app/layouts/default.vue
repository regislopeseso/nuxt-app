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
    <slot></slot>
  </div>
</template>
