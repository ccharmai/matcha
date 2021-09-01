<template>
  <div class="root__wrapper">
    <div class="compose">
      <div class="header"><TheHeader /></div>
      <div class="content"><router-view /></div>
      <div class="footer"><TheFooter /></div>
    </div>
    <div class="hide">
      <img src="./assets/img/main-page.png" alt="preload main page image">
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import TheFooter from '@/components/Layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$store.dispatch('initAuth');
  },
};
</script>

<style lang="scss">
  .root__wrapper {
    height: 100%;
    .compose {
      height: 100%;
      display: flex;
      flex-direction: column;
      .content {
        flex-grow: 1;
        overflow: auto;
        overflow-x: hidden;
      }
    }
    .hide {
      display: none;
    }
  }
</style>
