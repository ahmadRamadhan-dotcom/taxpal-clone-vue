<template>
  <form class="mt-20 grid lg:w-[380px]">
    <span class="font-['Inter'] font-semibold text-[#111827] text-lg"
      >Sign in to your account</span
    >
    <span class="font-['Inter'] mt-3 font-normal text-[#374151] text-sm"
      >Don’t have an account?
      <router-link to="register" class="text-[#2563eb] font-medium"
        >Sign up</router-link
      >
      for a free trial.</span
    >
    <div class="mt-10">
      <label
        for="email"
        class="font-['Inter'] font-medium text-sm text-[#374151]"
        >Email address</label
      >
      <input
        required
        class="appearance-none border rounded w-full py-2.5 px-3 text-gray-900 bg-gray-50 border-gray-200 leading-tight focus:outline-none mt-3 focus:shadow-outline focus:ring focus:ring-blue-500"
        id="email"
        type="email"
      />
    </div>
    <div class="mt-8">
      <label
        for="password"
        class="font-['Inter'] font-medium text-sm text-[#374151]"
        >Password</label
      >
      <input
        required
        class="appearance-none border rounded w-full py-2.5 px-3 text-gray-900 bg-gray-50 border-gray-200 leading-tight focus:outline-none mt-3 focus:shadow-outline focus:ring focus:ring-blue-500"
        id="password"
        type="password"
      />
    </div>
    <button
      class="group font-['Inter'] inline-flex items-center justify-center rounded-full mt-8 py-2.5 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
      type="submit"
    >
      <span>Sign in <span aria-hidden="true">→</span></span>
    </button>
  </form>
</template>
