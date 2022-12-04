<template>
  <form class="mt-20 grid mb-5 md:w-[400px] lg:w-[380px]">
    <span class="font-['Inter'] text-lg font-semibold text-[#111827]"
      >Get started for free</span
    >
    <span class="font-normal mt-3 font-['Inter'] text-sm text-[#374151]"
      >Already registered?
      <router-link to="/login" class="font-medium text-[#2563eb]"
        >Sign In</router-link
      >
      to your account</span
    >
    <div class="sm:flex sm:gap-6 sm:items-center">
      <LabelInput
        class="mt-10"
        :label-name="'First name'"
        :id="'first_name'"
        :type="'text'"
      />
      <LabelInput
        class="mt-8 sm:mt-10"
        :label-name="'Last name'"
        :id="'last_name'"
        :type="'text'"
      />
    </div>
    <LabelInput
      class="mt-8"
      :label-name="'Email address'"
      :id="'email'"
      :type="'email'"
    />
    <LabelInput
      class="mt-8"
      :label-name="'Password'"
      :id="'password'"
      :type="'password'"
    />
    <Select :options="options" />
    <button
      class="group font-['Inter'] inline-flex items-center justify-center rounded-full mt-8 py-2.5 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
      type="submit"
    >
      <span>Sign up <span aria-hidden="true">→</span></span>
    </button>
  </form>
</template>

<script setup>
import LabelInput from "~/components/LabelInput.vue";
import Select from "~/components/register/Select.vue";
const options = [
  { id: 1, name: "AltaVista search" },
  { id: 2, name: "Super Bowl commercial" },
  { id: 3, name: "Our route 34 city bus ad" },
  { id: 4, name: "The “Never Use This” podcast" },
];
</script>
