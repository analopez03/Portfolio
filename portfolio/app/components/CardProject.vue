<script setup lang="ts">
import type { Project } from "~/data/interfaceProjects";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="card border-2 border-pink-400 rounded-xl shadow-xl p-9 mx-auto overflow-hidden group flex flex-col h-full w-full"
  >
    <div
      class="card-image-container -mx-9 -mt-9 mb-6 overflow-hidden h-56 shrink-0"
    >
      <img
        :src="project.src"
        alt="Imagen del proyecto"
        class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>

    <div class="card-content flex flex-col flex-grow">
      <h3 class="card-title text-2xl font-bold mb-3">{{ project.name }}</h3>

      <p class="card-description text-base text-gray-600 mb-6 flex-grow">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in project.technology"
          :key="tech"
          class="text-xs px-3 py-1 bg-pink-100 text-pink-600 rounded-full font-semibold uppercase"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center gap-4 mt-auto">
        <NuxtLink
          v-if="!project.link"
          :to="`/project/${project.id}`"
          class="text-pink-500 font-bold hover:underline text-sm flex"
        >
          Ver proyecto →
        </NuxtLink>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="text-pink-500 font-bold hover:underline text-sm flex items-center"
          rel="noopener noreferrer"
        >
          Web externa ↗
        </a>
      </div>
    </div>
  </div>
</template>
