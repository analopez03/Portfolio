<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const projects = projectsData as Project[];
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-3">
    <CardProject v-for="p in projects" :key="p.id" :project="p" />
  </div>
</template>
