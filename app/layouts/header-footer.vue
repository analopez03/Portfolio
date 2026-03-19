<script setup lang="ts">
const menuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-purple-50 px-5 h-20 flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center gap-2 shrink-0">
        <img src="/img/postgre.svg" alt="Logo Ana López" class="h-12 w-auto" >
        <span class="font-semibold text-sm md:text-base hidden sm:block">
          Ana López De Ahumada
        </span>
      </nuxt-link>

      <nav
        class="hidden md:flex items-stretch h-full"
        aria-label="Navegación principal"
      >
        <nuxt-link
          to="#contact"
          class="flex items-center px-6 hover:bg-pink-100 transition-colors"
        >
          Contacto
        </nuxt-link>
        <nuxt-link
          to="/"
          class="flex items-center px-6 hover:bg-pink-100 transition-colors"
        >
          Home
        </nuxt-link>
      </nav>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-6 h-0.5 bg-pink-500 transition-transform duration-300"
          :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-pink-500 transition-opacity duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-pink-500 transition-transform duration-300"
          :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </header>

    <nav
      v-if="menuOpen"
      id="mobile-menu"
      class="md:hidden bg-pink-50 flex flex-col border-t border-pink-200"
      aria-label="Menú móvil"
    >
      <nuxt-link
        to="#contact"
        class="px-6 py-4 hover:bg-pink-100 transition-colors font-medium"
        @click="menuOpen = false"
      >
        Contacto
      </nuxt-link>
      <nuxt-link
        to="/"
        class="px-6 py-4 hover:bg-pink-100 transition-colors font-medium"
        @click="menuOpen = false"
      >
        Home
      </nuxt-link>
    </nav>

    <main class="flex-grow">
      <slot />
    </main>

    <footer
      id="contact"
      class="bg-purple-50 text-center py-4"
      role="contentinfo"
    >
      <p>&copy; 2026 Portafolio. Todos los derechos reservados.</p>
      <SocialNetwork />
    </footer>
  </div>
</template>
