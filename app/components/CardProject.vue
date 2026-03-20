<script setup lang="ts">
import type { Project } from "~/data/interfaceProjects";
import { resolveComponent } from "vue";

defineProps<{
  project: Project;
  priority?: boolean;
}>();

const NuxtLink = resolveComponent("NuxtLink");
</script>

<template>
  <component
    :is="project.link ? 'a' : NuxtLink"
    v-bind="
      project.link
        ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
        : { to: `/project/${project.id}` }
    "
    class="block h-full flex flex-col cursor-pointer rounded-xl"
    :aria-label="
      project.link
        ? `Ver proyecto ${project.name} en web externa (abre en nueva pestaña)`
        : `Ver detalles del proyecto ${project.name}`
    "
  >
    <article
      class="border-2 border-accent rounded-xl shadow-xl p-9 mx-auto overflow-hidden group flex flex-col h-full w-full bg-bg"
    >
      <div
        class="-mx-9 -mt-9 mb-6 overflow-hidden h-56 shrink-0"
        aria-hidden="true"
      >
        <img
          :src="project.src"
          :alt="`Imagen del proyecto ${project.name}`"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          :fetchpriority="priority ? 'high' : 'auto'"
          :loading="priority ? 'eager' : 'lazy'"
          width="400"
          height="224"
        >
      </div>

      <div class="flex flex-col flex-grow">
        <h3 class="text-2xl font-bold mb-3 text-text-primary">
          {{ project.name }}
        </h3>

        <p class="text-base text-text-secondary mb-6 flex-grow">
          {{ project.description }}
        </p>

        <ul
          class="flex flex-wrap gap-2 mb-6 list-none p-0"
          :aria-label="`Tecnologías de ${project.name}`"
        >
          <li
            v-for="tech in project.technology"
            :key="tech"
            class="text-xs px-3 py-1 bg-accent-subtle text-accent rounded-full font-semibold uppercase"
          >
            {{ tech }}
          </li>
        </ul>

        <div class="flex items-center gap-4 mt-auto" aria-hidden="true">
          <span class="text-accent font-bold text-sm">
            {{ project.link ? "Web externa ⭧" : "Ver proyecto ⟶" }}
          </span>
        </div>
      </div>
    </article>
  </component>
</template>
