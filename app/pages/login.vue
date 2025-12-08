<script setup>
  const isLoggedIn = useIsLoggedIn();

  definePageMeta({
    layout: "plain",
  });

  function login() {
    isLoggedIn.value = true;
    useRouter().push("/");
  }
</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label for="username">Username </label>
    <input
      type="text"
      id="username"
    />
    <label for="password"
      >Password
      <input
        type="password"
        id="password"
      />
    </label>
    <button>LOGIN</button>
  </form>
</template>

<style scoped></style>
