<script setup>
import Header from "~/components/home/Header.vue";
import { useHeaderStore } from "~/store/useHeaderStore";
import { storeToRefs } from "pinia";
import { onMounted, watchEffect } from "vue";

const main = useHeaderStore();

const { showNav } = storeToRefs(main);

watchEffect(() => {
  if (showNav.value == true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
});
</script>

<template>
  <div class="h-[200vh]" :class="showNav ? 'bg-slate-200/50' : ''">
    <Header />
    <main></main>
  </div>
</template>
