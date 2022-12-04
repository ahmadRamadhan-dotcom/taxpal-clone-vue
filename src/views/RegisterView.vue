<script setup>
import Logo from "~/components/login/Logo.vue";
import Form from "~/components/register/Form.vue";
</script>

<template>
  <main
    class="p-4 md:p-0 md:bg-[url('https://salient.tailwindui.com/_next/static/media/background-auth.4bcf3f4b.jpg')] md:bg-no-repeat md:bg-cover lg:bg-none lg:grid lg:grid-cols-2 xl:flex"
  >
    <div
      class="mt-6 md:mt-0 md:bg-white sm:w-[420px] md:w-[600px] xl:w-[44%] 2xl:w-1/3 md:h-screen xl:h-[120vh] 2xl:h-screen md:grid md:place-content-center sm:mx-auto xl:mx-0"
    >
      <Logo />
      <Form />
    </div>
    <div class="hidden lg:flex lg:justify-end xl:w-[56%] 2xl:w-[77vw]">
      <img
        src="https://salient.tailwindui.com/_next/static/media/background-auth.4bcf3f4b.jpg"
        alt=""
        class="lg:h-screen xl:h-[120vh] 2xl:h-screen w-[81%] xl:w-full"
      />
    </div>
  </main>
</template>
