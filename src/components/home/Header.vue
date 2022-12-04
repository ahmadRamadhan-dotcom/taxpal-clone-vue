<script setup>
import Logo from "~/components/Logo.vue";
import ToggleNav from "~/components/home/ToggleNav.vue";
import Nav from "~/components/home/Nav.vue";
import { useHeaderStore } from "~/store/useHeaderStore";
import { storeToRefs } from "pinia";

const main = useHeaderStore();

const { showNav } = storeToRefs(main);

const changeBgandPreventScroll = () => {
  showNav.value = !showNav.value;
};

const sections = [
  { id: 1, name: "Features", href: "#features" },
  { id: 2, name: "Testimonials", href: "#testimonials" },
  { id: 3, name: "Pricing", href: "#pricing" },
];
</script>

<template>
  <header
    class="flex justify-between mx-auto w-[93%] xl:w-[1230px] translate-y-10 md:translate-y-0 md:mt-10"
  >
    <div class="md:flex items-center md:gap-10">
      <Logo />
      <Nav :show-nav="showNav" :sections="sections" />
    </div>
    <div class="flex items-center gap-4">
      <router-link
        to="/login"
        class="text-slate-700 hidden md:block hover:text-[#0f172a] rounded-lg hover:bg-slate-100 py-2 px-3 font-normal text-sm"
      >
        Sign in
      </router-link>
      <router-link
        to="/register"
        class="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
        href="/register"
        ><span>Get started <span class="hidden lg:inline">today</span></span>
      </router-link>
      <ToggleNav
        :change-bgand-prevent-scroll="changeBgandPreventScroll"
        :show-nav="showNav"
      />
    </div>
  </header>
</template>
