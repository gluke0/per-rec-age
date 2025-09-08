<script >
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';

  export default{
    name: "App",
    data(){
      return{
      }
    },
  components:{
    Header,
    Footer,
  },
};
</script>

<template>
  <Header></Header> 
  <Footer></Footer> 
</template>

<style lang="scss">
@use './style/main.scss';
</style>
