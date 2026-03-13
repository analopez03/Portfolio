<script setup lang="ts">
const skills = [
  {
    title: "Diseño",
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Illustrator", level: 85 },
      { name: "Photoshop", level: 88 }
    ]
  },
  {
    title: "Desarrollo",
    items: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 82 }
    ]
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", level: 90 },
      { name: "Framer", level: 85 },
      { name: "Webflow", level: 80 },
      { name: "After Effects", level: 75 }
    ]
  }
]
</script>

<template>
  <section class="py-20 px-6 max-w-7xl mx-auto">

    <!-- TITLE -->
    <div class="text-left mb-16">
      <h2 class="text-4xl font-bold">
        Mis <span class="text-pink-500">Habilidades</span>
      </h2>

      <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-3 rounded ml-0"></div>
    </div>

    <!-- CARDS -->
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
        >
          <!-- skill name -->
          <div class="flex justify-between text-sm mb-2">
            <span class="text-gray-600">{{ skill.name }}</span>
            <span class="text-pink-500 font-semibold">{{ skill.level }}%</span>
          </div>

          <!-- progress bar -->
          <div class="w-full h-2 bg-gray-300 rounded-full">
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