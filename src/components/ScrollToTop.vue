<template>
  <button class="scroll-to-top" @click="scrollToTop" aria-label="Torna su">
    <i class="ri-arrow-up-box-fill"></i>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>
