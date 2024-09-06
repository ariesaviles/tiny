<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Welcome to the Homepage!</h2>
    <p class="mb-4">This is the index page of your Nuxt app.</p>

    <NuxtLink to="/blog/01">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Blog Post 01
      </button>
    </NuxtLink>
  </div>
</template>
