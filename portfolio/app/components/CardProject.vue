<script setup lang="ts">
import type { Project } from "~/data/interfaceProjects";
import { resolveComponent } from "vue";

defineProps<{
  project: Project;
}>();

const NuxtLink = resolveComponent("NuxtLink");
</script>

<template>
  <article
    class="card border-2 border-pink-400 rounded-xl shadow-xl p-9 mx-auto overflow-hidden group flex flex-col h-full w-full"
  >
    <div
      class="card-image-container -mx-9 -mt-9 mb-6 overflow-hidden h-56 shrink-0"
    >
      <NuxtImg
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
        <span class="text-pink-500 font-bold text-sm">
          {{ project.link ? "Web externa ↗" : "Ver proyecto →" }}
        </span>
      </div>
    </div>
  </article>
</template>
