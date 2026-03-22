<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const route = useRoute();

const project = computed(() => {
  const id = Number(route.params.id);
  return (projectsData as Project[]).find((p) => p.id === id);
});

const headingId = useId ? useId() : "project-heading";
</script>

<template>
  <div v-if="project">
    <Head>
      <Title>{{ project.name }} | Ana López</Title>
      <Meta name="description" :content="project.description" />
    </Head>

    <div id="main-content" class="min-h-screen bg-bg p-10">
      <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-text-on-accent px-4 py-2 rounded z-50"
      >
        Saltar al contenido principal
      </a>

      <nav aria-label="Navegación principal">
        <NuxtLink
          to="/project"
          class="text-accent font-bold mb-6 inline-block"
          aria-label="Volver a la galería de proyectos"
        >
          <span class="text-2xl leading-none" aria-hidden="true"> ← </span
          >Volver a la galería
        </NuxtLink>
      </nav>

      <article class="max-w-4xl mx-auto" :aria-labelledby="headingId">
        <img
          :src="project.src"
          :alt="`Captura de pantalla del proyecto ${project.name}`"
          class="w-full h-auto rounded-2xl shadow-2xl mb-10"
          loading="eager"
          fetchpriority="high"
          width="896"
          height="504"
        >

        <h1 :id="headingId" class="text-5xl font-bold mb-4">
          {{ project.name }}
        </h1>

        <div class="mb-8">
          <p class="sr-only">Tecnologías utilizadas:</p>
          <ul
            class="flex flex-wrap gap-2 list-none p-0"
            role="list"
            aria-label="Tecnologías utilizadas en este proyecto"
          >
            <li v-for="tech in project.technology" :key="tech">
              <span
                class="bg-accent-subtle text-accent px-4 py-1 rounded-full text-sm font-bold uppercase block"
              >
                {{ tech }}
              </span>
            </li>
          </ul>
        </div>

        <blockquote
          class="text-xl text-text-secondary leading-relaxed italic border-l-4 border-accent pl-6"
          :cite="project.link || undefined"
        >
          <p>{{ project.description }}</p>
        </blockquote>
      </article>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen flex items-center justify-center"
    role="status"
    aria-live="polite"
    aria-label="Cargando proyecto"
  >
    <span class="sr-only">Cargando proyecto...</span>
    <div
      class="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"
      aria-hidden="true"
    />
  </div>
</template>
