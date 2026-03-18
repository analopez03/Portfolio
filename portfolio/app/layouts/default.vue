<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-pink-50 px-5 grid grid-cols-9 items-stretch h-20">
      <div class="col-span-4 flex justify-center items-center">
        <nuxt-link to="/">
          <NuxtImg src="/img/postgre.svg" alt="Logo" class="h-12 w-auto" />
        </nuxt-link>
        <h1 class="ml-2">Ana López De Ahumada</h1>
      </div>

      <nav class="col-span-5 flex justify-center items-stretch mr-8">
        <nuxt-link
          to="#about"
          class="flex items-center px-6 hover:bg-pink-100 transition-colors"
        >
          Sobre mí
        </nuxt-link>
        <nuxt-link
          to="#contact"
          class="flex items-center px-6 hover:bg-pink-100 transition-colors"
        >
          Contacto
        </nuxt-link>
        <nuxt-link
          to="/project"
          class="flex items-center px-6 hover:bg-pink-100 transition-colors"
        >
          Trabajos
        </nuxt-link>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-pink-50 text-center py-4" id="contact" role="contentinfo">
      <p>&copy; 2026 Portafolio. Todos los derechos reservados.</p>
      <SocialNetwork />
    </footer>
  </div>
</template>
