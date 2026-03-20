<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const projects = projectsData as Project[];

definePageMeta({
  layout: "header-footer",
});

const CardProject = defineAsyncComponent(
  () => import("~/components/CardProject.vue"),
);
</script>

<template>
  <div>
    <Head>
      <Title>Proyectos | Ana López</Title>
      <Meta
        name="description"
        content="Galería de proyectos de diseño y desarrollo web."
      />
    </Head>
    <main class="min-h-screen bg-white">
      <a
        href="#proyectos"
        class="sr-only bg-pink-500 text-white px-4 py-2 rounded z-50"
      >
        Saltar al contenido
      </a>

      <nav aria-label="Navegación principal" class="mx-8 my-4">
        <NuxtLink
          to="/"
          class="text-pink-500 font-bold mb-6 inline-block"
          aria-label="Volver al inicio"
        >
          <span class="text-2xl leading-none" aria-hidden="true"> ← </span>
          Volver al inicio
        </NuxtLink>
      </nav>

      <section
        id="proyectos"
        aria-labelledby="proyectos-titulo"
        class="max-w-6xl mx-auto p-3"
      >
        <h1 id="proyectos-titulo" class="text-4xl font-bold mb-8 text-center">
          Proyectos
        </h1>

        <ul
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0"
          aria-label="Lista de proyectos"
        >
          <li v-for="(p, id) in projects" :key="p.id">
            <CardProject :project="p" :priority="id === 0" />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
