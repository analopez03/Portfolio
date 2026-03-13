<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="card border-2 border-pink-400 rounded-xl shadow-xl p-8 max-w-xs mx-auto"
  >
    <img
      :src="project.src"
      alt="Imagen del proyecto"
      class="card-image w-full h-40 object-cover rounded-lg mb-4"
    />
    <div class="card-content">
      <h3 class="card-title text-xl font-bold mb-2">{{ project.name }}</h3>
      <p class="card-description text-sm text-gray-600 mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technology"
          :key="tech"
          class="text-[10px] px-2 py-1 bg-pink-100 text-pink-600 rounded-full font-semibold uppercase"
        >
          {{ tech }}
        </span>
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        class="card-link text-sm text-pink-500 font-bold hover:underline"
        >Ver Proyecto</a
      >
    </div>
  </div>
</template>
