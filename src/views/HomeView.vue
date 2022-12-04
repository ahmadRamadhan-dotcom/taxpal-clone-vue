<script setup>
import Header from "~/components/home/Header.vue";
import Hero from "~/components/home/Hero.vue";
import { useHeaderStore } from "~/store/useHeaderStore";
import { storeToRefs } from "pinia";
import { watchEffect } from "vue";

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
  <div :class="showNav ? 'bg-slate-300/50' : ''">
    <Header />
    <main>
      <Hero />
    </main>
  </div>
</template>
