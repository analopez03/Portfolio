<script setup lang="ts">
const menuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="bg-surface px-5 h-20 flex items-center justify-between border-b border-border"
    >
      <nuxt-link
        to="/"
        class="flex items-center gap-2 shrink-0 text-text-primary"
      >
        <img src="/img/postgre.svg" alt="Logo Ana López" class="h-12 w-auto" />
        <span class="text-sm md:text-base hidden sm:block">
          Ana López De Ahumada
        </span>
      </nuxt-link>

      <nav
        class="hidden md:flex items-stretch h-full"
        aria-label="Navegación principal"
      >
        <nuxt-link
          to="#about"
          class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent transition-colors"
        >
          Sobre mí
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent transition-colors"
        >
          Contacto
        </nuxt-link>
        <nuxt-link
          to="/project"
          class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent transition-colors"
        >
          Trabajos
        </nuxt-link>
      </nav>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-border-focus"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-6 h-0.5 bg-accent transition-transform duration-300"
          :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-accent transition-opacity duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-6 h-0.5 bg-accent transition-transform duration-300"
          :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </header>

    <nav
      v-if="menuOpen"
      id="mobile-menu"
      class="md:hidden bg-surface flex flex-col border-t border-border"
      aria-label="Menú móvil"
    >
      <nuxt-link
        to="#about"
        class="px-6 py-4 text-text-primary font-medium hover:bg-surface-2 hover:text-accent transition-colors"
        @click="menuOpen = false"
      >
        Sobre mí
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="px-6 py-4 text-text-primary font-medium hover:bg-surface-2 hover:text-accent transition-colors"
        @click="menuOpen = false"
      >
        Contacto
      </nuxt-link>
      <nuxt-link
        to="/project"
        class="px-6 py-4 text-text-primary font-medium hover:bg-surface-2 hover:text-accent transition-colors"
        @click="menuOpen = false"
      >
        Trabajos
      </nuxt-link>
    </nav>

    <main class="flex-grow bg-bg">
      <slot />
    </main>

    <footer
      class="bg-surface border-t border-border text-center py-4 text-text-secondary"
      role="contentinfo"
    >
      <SocialNetwork />
      <p>&copy; 2026 Portafolio. Todos los derechos reservados.</p>
      <NuxtLink
        to="/contact"
        class="text-accent hover:text-pink-600 transition-colors rounded"
      >
        Contáctame
      </NuxtLink>
    </footer>
  </div>
</template>
