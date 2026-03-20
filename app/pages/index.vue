<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const projects = projectsData as Project[];
const sortProjects = projects.slice(0, 3);

const About = defineAsyncComponent(() => import("~/components/About.vue"));
const SkillsSection = defineAsyncComponent(
  () => import("~/components/SkillsSection.vue"),
);
const CardProject = defineAsyncComponent(
  () => import("~/components/CardProject.vue"),
);
</script>

<template>
  <div>
    <section
      aria-labelledby="hero-titulo"
      class="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p class="text-sm tracking-widest text-accent font-semibold mb-4">
          DESIGNER & DEVELOPER
        </p>

        <h1 id="hero-titulo" class="text-5xl font-bold leading-tight mb-6">
          Crafting Digital Experiences:
          <br >
          Where <span class="text-accent">Design</span> Meets
          <span class="text-accent">Code</span>
        </h1>

        <p class="text-muted mb-8 max-w-lg">
          Soy una diseñadora gráfica y desarrolladora web apasionada por crear
          experiencias digitales únicas y funcionales.
        </p>

        <InfoCard />
      </div>

      <div class="relative flex justify-center">
        <div class="relative w-full max-w-md">
          <div
            class="absolute inset-0 bg-pink-200 rounded-2xl translate-x-4 -translate-y-4"
            aria-hidden="true"
          />
          <img
            src="/img/perro.avif"
            alt=""
            class="relative rounded-2xl border-4 border-pink-400 w-full h-auto"
            fetchpriority="high"
          >
        </div>
      </div>
    </section>

    <Suspense>
      <About />
      <template #fallback>
        <div
          class="h-64 animate-pulse bg-surface rounded-xl"
          aria-hidden="true"
        />
      </template>
    </Suspense>

    <Suspense>
      <SkillsSection />
      <template #fallback>
        <div
          class="h-64 animate-pulse bg-surface rounded-xl"
          aria-hidden="true"
        />
      </template>
    </Suspense>

    <section
      aria-labelledby="proyectos-titulo"
      class="px-6 py-16 bg-surface w-full"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <TheTitle id="proyectos-titulo">
            Proyectos
            <template #pinkTitle>destacados</template>
          </TheTitle>

          <NuxtLink
            to="/project"
            class="text-accent font-medium hover:text-pink-600 transition-colors rounded"
            aria-label="Ver todos los proyectos del portfolio"
          >
            Ver todos los proyectos
            <span class="text-2xl leading-none" aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <div v-for="(p, id) in sortProjects" :key="p.id" class="h-full">
            <CardProject :project="p" :priority="id === 0" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
