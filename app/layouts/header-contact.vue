<script setup lang="ts">
const menuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="border-b border-border w-full sticky top-0 z-50 bg-surface">
      <header
        class="bg-surface px-5 h-20 flex max-w-7xl mx-auto w-full items-center justify-between border-b border-border"
      >
        <nuxt-link
          to="/"
          class="flex items-center gap-2 shrink-0 text-text-primary"
        >
          <span class="text-sm md:text-base hidden sm:block">
            Ana López De Ahumada
          </span>
        </nuxt-link>

        <nav
          class="hidden md:flex items-stretch h-full"
          aria-label="Navegación principal"
        >
          <nuxt-link
            to="/"
            class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent transition-colors"
          >
            Home
          </nuxt-link>

          <nuxt-link
            to="/project"
            class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent transition-colors"
          >
            Trabajos
          </nuxt-link>

          <DarkModeToggle />
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
    </div>

    <nav
      v-if="menuOpen"
      id="mobile-menu"
      class="md:hidden bg-surface flex flex-col border-t border-border"
      aria-label="Menú móvil"
    >
      <nuxt-link
        to="/"
        class="px-6 py-4 text-text-primary font-medium hover:bg-surface-2 hover:text-accent transition-colors"
        @click="menuOpen = false"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/project"
        class="px-6 py-4 text-text-primary font-medium hover:bg-surface-2 hover:text-accent transition-colors"
        @click="menuOpen = false"
      >
        Trabajos
      </nuxt-link>

      <DarkModeToggle />
    </nav>

    <main class="flex-grow bg-bg">
      <slot />
    </main>

    <footer
      class="bg-bg border-t border-border text-center py-4 text-text-secondary"
      role="contentinfo"
    >
      <SocialNetwork />
      <p>&copy; 2026 Portafolio. Todos los derechos reservados.</p>
      <NuxtLink
        to="/contact"
        class="text-accent hover:text-accent-hover transition-colors rounded"
      >
        Contáctame
      </NuxtLink>
    </footer>
  </div>
</template>
