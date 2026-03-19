<script setup lang="ts"></script>

<template>
  <div class="text-left mb-16" aria-label="titulo">
    <h2 class="text-4xl font-bold">
      <slot />
      <span class="text-pink-500">
        <slot name="pinkTitle" />
      </span>
    </h2>
    <div
      class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-3 rounded"
    />
  </div>
</template>
