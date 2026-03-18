<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const projects = projectsData as Project[];

definePageMeta({
  layout: "header-footer",
});
</script>

<template>
  <head>
    <title>Trabajos</title>
  </head>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-3"
    role="list"
    aria-label="Lista de proyectos"
  >
    <CardProject v-for="p in projects" :key="p.id" :project="p" />
  </div>
</template>
