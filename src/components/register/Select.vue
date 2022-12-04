<template>
  <div class="mt-8">
    <p class="font-medium mb-3 text-sm text-[#374151] font-['Inter']">
      How did you hear about us?
    </p>
    <select
      name="referral_source"
      class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm pr-8"
      id="referral_source"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  options: Array,
});
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
</style>
