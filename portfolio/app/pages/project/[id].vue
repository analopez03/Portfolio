<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const route = useRoute();
const id = Number(route.params.id);

const project = computed(() => {
  const id = Number(route.params.id);
  return (projectsData as Project[]).find((p) => p.id === id);
});
</script>

<template>
  <div v-if="project" class="min-h-screen bg-white p-10">
    <NuxtLink to="/project" class="text-pink-500 font-bold mb-6 inline-block">
      ← Volver a la galería
    </NuxtLink>

    <div class="max-w-4xl mx-auto">
      <NuxtImg
        :src="project.src"
        class="w-full h-auto rounded-2xl shadow-2xl mb-10"
      />

      <h1 class="text-5xl font-bold mb-4">{{ project.name }}</h1>

      <div class="flex gap-2 mb-8">
        <span
          v-for="t in project.technology"
          :key="t"
          class="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase"
        >
          {{ t }}
        </span>
      </div>

      <p
        class="text-xl text-gray-700 leading-relaxed italic border-l-4 border-pink-400 pl-6"
      >
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
