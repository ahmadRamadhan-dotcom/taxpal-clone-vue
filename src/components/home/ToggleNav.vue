<template>
  <button
    @click="changeBgandPreventScroll"
    type="button"
    aria-label="navigation_button"
    class="block md:hidden"
  >
    <svg
      aria-hidden="true"
      :class="showNav ? 'hidden' : 'block'"
      class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
      <path
        d="M2 2L12 12M12 2L2 12"
        class="origin-center transition scale-90 opacity-0"
      ></path>
    </svg>

    <svg
      aria-hidden="true"
      :class="showNav ? 'block' : 'hidden'"
      class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        class="origin-center transition scale-90 opacity-0"
      ></path>
      <path d="M2 2L12 12M12 2L2 12" class="origin-center transition"></path>
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  changeBgandPreventScroll: Function,
  showNav: Boolean,
});
</script>
