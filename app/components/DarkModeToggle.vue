<template>
  <button
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="flex items-center px-6 py-4 text-text-secondary hover:bg-surface-2 hover:text-accent dark:hover:text-white transition-colors"
    @click="toggleDarkMode"
  >
    <span v-if="isDark" class="text-text-primary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </span>
    <span v-else class="text-text-primary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("darkMode", isDark.value.toString());
  document.documentElement.classList.toggle("dark", isDark.value);
};

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode !== null) {
    isDark.value = savedMode === "true";
  } else {
    // Default to system preference
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  document.documentElement.classList.toggle("dark", isDark.value);
});
</script>
