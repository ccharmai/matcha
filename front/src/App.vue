<template>
  <div class="root__wrapper">
    <div class="header"><TheHeader /></div>
    <div class="content"><router-view /></div>
    <div class="footer"><TheFooter /></div>
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
};
</script>

<style lang="scss">
  .root__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex-grow: 1;
      overflow: auto;
      overflow-x: hidden;
    }
  }
</style>
