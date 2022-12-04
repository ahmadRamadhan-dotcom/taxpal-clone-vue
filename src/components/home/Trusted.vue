<script setup>
const trustedData = [
  {
    id: 1,
    src: "https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg",
  },
  {
    id: 2,
    src: "https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg",
  },
  {
    id: 3,
    src: "https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg",
  },
  {
    id: 4,
    src: "https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg",
  },
  {
    id: 5,
    src: "https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg",
  },
  {
    id: 6,
    src: "https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg",
  },
];
</script>

<template>
  <div class="mt-48">
    <p class="font-['Lexend'] font-normal text-center text-base text-[#0f172a]">
      Trusted by these six companies so far
    </p>
    <div
      class="grid grid-cols-2 md:grid-cols-3 sm:place-content-center sm:place-items-center xl:flex mt-6 items-center gap-12"
    >
      <img
        v-for="(data, index) in trustedData"
        :key="index"
        :src="data.src"
        alt="trusted_company_image"
      />
    </div>
  </div>
</template>
