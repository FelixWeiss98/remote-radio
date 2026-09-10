<template>
  <div class="login-page">
    <div class="login-page-form">
      <h1>Login</h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '../assets/css/abstracts' as *;

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $color-grayish-white;
}

.login-page-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $color-offwhite;
  width: 30rem;
  height: 40rem;
  border-radius: 2rem;
}
</style>
