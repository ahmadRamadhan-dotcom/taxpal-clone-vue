<template>
  <form class="mt-20 grid">
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
    <LabelInput
      class="mt-10"
      :label-name="'First name'"
      :id="'first_name'"
      :type="'text'"
    />
  </form>
</template>

<script setup>
import LabelInput from "~/components/LabelInput.vue";
</script>
