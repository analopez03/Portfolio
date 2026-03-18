<script setup lang="ts">
import TheTitle from "./TheTitle.vue";

const skills = [
  {
    title: "Diseño",
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 95 },
      { name: "Illustrator", level: 95 },
      { name: "Photoshop", level: 90 },
    ],
  },
  {
    title: "Desarrollo",
    items: [
      { name: "React", level: 65 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 78 },
      { name: "HTML", level: 90 },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", level: 90 },
      { name: "Wordpress", level: 90 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Bootstrap", level: 90 },
    ],
  },
];
</script>

<template>
  <section class="py-20 px-6 max-w-7xl mx-auto">
    <TheTitle>
      Mis
      <template #pinkTitle>Habilidades</template>
    </TheTitle>

    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="category in skills"
        :key="category.title"
        class="bg-gray-100 p-8 rounded-2xl shadow-sm"
      >
        <h3 class="text-xl font-semibold mb-6">
          {{ category.title }}
        </h3>

        <div
          v-for="skill in category.items"
          :key="skill.name"
          class="mb-6"
          aria-label="skills"
        >
          <div class="flex justify-between text-sm mb-2">
            <span class="text-gray-600" aria-label="skill name">{{
              skill.name
            }}</span>
            <span class="text-gray-950 font-semibold" aria-label="skill level"
              >{{ skill.level }}%</span
            >
          </div>

          <div
            class="w-full h-2 bg-gray-300 rounded-full"
            role="progressbar"
            aria-label="porcentaje"
          >
            <div
              class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
