<template>
  <button
    class="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 dark:text-[color:var(--color-text)]"
  >
    <span
      class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
    ></span>

    <span class="relative block border border-current bg-[color:var(--color-background)] px-8 py-3">
      <slot />
    </span>
  </button>
</template>
