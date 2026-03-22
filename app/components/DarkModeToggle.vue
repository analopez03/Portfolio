<template>
  <button
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="flex items-center px-6 text-text-secondary hover:bg-surface-2 hover:text-accent dark:hover:text-white transition-colors"
    @click="toggleDarkMode"
  >
    <span v-if="isDark" class="text-text-primary">Oscuro</span>
    <span v-else class="text-text-primary">Claro</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', isDark.value.toString())
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    isDark.value = savedMode === 'true'
  } else {
    // Default to system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>