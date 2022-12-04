<script setup>
import Logo from "~/components/Logo.vue";
const sections = [
  { id: 1, name: "Features", href: "#features" },
  { id: 2, name: "Testimonials", href: "#testimonials" },
  { id: 3, name: "Pricing", href: "#pricing" },
];
</script>

<template>
  <header
    class="sm:flex sm:justify-between mx-auto sm:w-[93%] xl:w-[1230px] mt-10"
  >
    <div class="xl:flex items-center xl:gap-10">
      <Logo />
      <ul class="fixed lg:flex items-center gap-4">
        <li v-for="(section, index) in sections" :key="index">
          <a
            :href="section.href"
            class="text-sm font-['Inter'] font-normal py-2 px-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-[#0f172a]"
            >{{ section.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="xl:flex items-center xl:gap-4">
      <router-link
        to="/login"
        class="text-slate-700 sm:hidden lg:block hover:text-[#0f172a] rounded-lg hover:bg-slate-100 py-2 px-3 font-normal text-sm"
      >
        Sign in
      </router-link>
      <router-link
        to="/register"
        class="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
        href="/register"
        ><span
          >Get started <span class="hidden lg:inline">today</span></span
        ></router-link
      >
    </div>
  </header>
</template>
