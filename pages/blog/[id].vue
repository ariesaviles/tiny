<template>
  <div>
    <h2>Blog Post: {{ id }}</h2>
    <p>This is a very interesting blog written by me</p>

    <NuxtLink to="/">
      <button>Back to Home</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
