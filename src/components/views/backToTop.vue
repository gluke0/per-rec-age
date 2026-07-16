<template>
  <button class="back-to-top" @click="backToTop" aria-label="Torna su">
    <i class="ri-arrow-up-line" aria-hidden="true"></i>
  </button>
</template>

<script>
  export default {
    name: 'backToTop',
    methods: {
      backToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
</script>