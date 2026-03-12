<script setup lang="ts">
const socialNetworks = [
  {
    name: "GitHub",
    src: "../../img/github.svg",
    url: "https://github.com/analopez03",
  },
  {
    name: "LinkedIn",
    src: "../../img/linkedin.svg",
    url: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    src: "../../img/instagram.svg",
    url: "https://www.instagram.com/",
  },
];
</script>

<template>
  <div class="flex gap-4 justify-center mt-4">
    <a
      v-for="item in socialNetworks"
      :key="item.name"
      :href="item.url"
      target="_blank"
    >
      <img :src="item.src" :alt="item.name" class="w-6 h-6" />
    </a>
  </div>
</template>
