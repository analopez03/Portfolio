<script setup lang="ts">
import projectsData from "~/data/project.json";
import type { Project } from "~/data/interfaceProjects";

const projects = projectsData as Project[];
const sortProjects = projects.slice(0, 3);
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>

  <section
    class="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center"
  >
    <div>
      <p class="text-sm tracking-widest text-pink-500 font-semibold mb-4">
        DESIGNER & DEVELOPER
      </p>

      <h1 class="text-5xl font-bold leading-tight mb-6">
        Crafting Digital Experiences:
        <br />
        Where <span class="text-pink-400">Design</span> Meets
        <span class="text-pink-400">Code</span>
      </h1>

      <p class="text-gray-500 mb-8 max-w-lg">
        Soy una diseñadora gráfica y desarrolladora web apasionada por crear
        experiencias digitales únicas y funcionales.
      </p>

      <InfoCard />
    </div>

    <div class="relative flex justify-center">
      <div
        class="absolute inset-0 bg-pink-200 rounded-2xl translate-x-4 translate-y-4"
      ></div>

      <img
        src="/img/perro.webp"
        alt="Perro"
        class="relative rounded-2xl border-4 border-pink-400"
      />
    </div>
  </section>

  <section>
    <About />
  </section>

  <section>
    <SkillsSection />
  </section>

  <section class="px-6 py-16 bg-pink-50 w-full">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <TheTitle>
          Proyectos
          <template #pinkTitle>destacados</template>
        </TheTitle>

        <NuxtLink
          to="/project"
          class="text-pink-500 font-medium hover:text-pink-600 transition-colors"
        >
          Ver todos los proyectos →
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <CardProject v-for="p in sortProjects" :key="p.id" :project="p" />
      </div>
    </div>
  </section>
</template>
