<template>
  <section class="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

    <!-- LEFT -->
    <div>

      <p class="text-sm tracking-widest text-pink-500 font-semibold mb-4">
        DESIGNER & DEVELOPER
      </p>

      <h1 class="text-5xl font-bold leading-tight mb-6">
        Crafting Digital Experiences:
        <br />
        Where <span class="text-pink-400">Design</span>
        Meets <span class="text-pink-400">Code</span>
      </h1>

      <p class="text-gray-500 mb-8 max-w-lg">
        Soy una diseñadora gráfica y desarrolladora web apasionada por crear
        experiencias digitales únicas y funcionales.
      </p>

      <InfoCard />

    </div>

    <!-- RIGHT IMAGE -->
    <div class="relative flex justify-center">

      <div class="absolute inset-0 bg-pink-200 rounded-2xl translate-x-4 translate-y-4"></div>

      <img
        src="/img/perro.webp"
        alt="Perro"
        class="relative rounded-2xl border-2 border-pink-400"
      />
    </div>
  </section>
</template>
