<script setup lang="ts">
const cards = [
  { title: "BRANDING", src: "/img/almuerzo-cohete.svg" },
  { title: "INNOVATION", src: "/img/destellos.svg" },
  { title: "WEB DEVELOPER", src: "/img/codigo-sencillo.svg" },
  { title: "UI/UX DESIGN", src: "/img/paleta.svg" },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-4 max-w-md" aria-label="card">
    <div
      v-for="card in cards"
      :key="card.title"
      class="bg-surface-2 p-5 rounded-xl hover:shadow-md transition"
    >
      <div class="text-accent text-xl mb-2">
        <NuxtImg
          :src="card.src"
          :alt="card.title"
          class="w-5 h-5 object-contain"
        />
      </div>

      <h2
        class="text-sm font-semibold tracking-wide text-text-primary"
        aria-label="Card title"
      >
        {{ card.title }}
      </h2>
    </div>
  </div>
</template>
