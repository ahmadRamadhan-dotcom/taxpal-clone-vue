<template>
  <div>
    <label class="font-['Inter'] font-medium text-sm text-[#374151]">{{
      labelName
    }}</label>
    <input
      required
      class="appearance-none border rounded w-full py-2.5 px-3 text-gray-900 bg-gray-50 border-gray-200 leading-tight focus:outline-none mt-3 focus:shadow-outline focus:ring focus:ring-blue-500"
      :id="id"
      :type="type"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  labelName: String,
  id: String,
  type: String,
});
</script>
