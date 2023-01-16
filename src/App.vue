<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <nav class="bg-blue-900">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/auth">Registration</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
