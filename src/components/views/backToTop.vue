<template>
  <button class="back-to-top" @click="backToTop" aria-label="Torna su">
    <i class="ri-arrow-up-box-fill"></i>
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