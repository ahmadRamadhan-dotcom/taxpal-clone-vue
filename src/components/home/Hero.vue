<script setup>
import HeroTitle from "~/components/home/HeroTitle.vue";
import HeroButton from "~/components/home/HeroButton.vue";
import Trusted from "~/components/home/Trusted.vue";
</script>

<template>
  <section
    class="mx-auto w-11/12 sm:w-[600px] md:w-[660px] lg:w-[900px] xl:w-[1050px] mt-[160px]"
  >
    <div class="mx-auto xl:w-[890px]">
      <HeroTitle />
      <p
        class="font-['Inter'] text-[#334155] text-lg w-9/12 mx-auto mt-7 font-normal text-center"
      >
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don’t get audited.
      </p>
    </div>
    <HeroButton />
    <Trusted />
  </section>
</template>
