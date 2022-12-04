<template>
  <ul
    :class="showNav ? 'fixed' : 'hidden'"
    class="mt-7 md:mt-0 w-full sm:w-[93%] pt-5 pb-7 md:py-0 bg-white lg:py-0 grid gap-4 md:flex rounded-xl p-3 border md:border-[0px] items-center lg:gap-4"
  >
    <li
      v-for="(section, index) in sections"
      :class="
        index == 2 ? 'border-b md:border-[0px] pb-3 md:pb-0 lg:border-none' : ''
      "
      :key="index"
    >
      <a
        :href="section.href"
        class="text-lg md:text-sm font-['Inter'] font-normal py-2 px-3 rounded-lg text-[#0f172a] md:text-slate-700 hover:bg-slate-100 hover:text-[#0f172a]"
        >{{ section.name }}</a
      >
    </li>
    <li class="block md:hidden">
      <router-link
        to="/login"
        class="text-lg lg:text-sm font-['Inter'] font-normal py-2 px-3 rounded-lg text-[#0f172a] md:text-slate-700 hover:bg-slate-100 hover:text-[#0f172a]"
        >Sign in</router-link
      >
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  showNav: Boolean,
  sections: Array,
});
</script>
