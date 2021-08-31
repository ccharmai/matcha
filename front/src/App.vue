<template>
  <div class="root__wrapper">
    <Imp v-model="line" placeholder="abc" />
  </div>
</template>

<script>
import Imp from '@/components/Shared/Inp.vue';

export default {
  components: {
    Imp,
  },
  data() {
    return {
      line: 'abcd',
    };
  },
};
</script>

<style lang="scss">
  .root__wrapper {
    height: 100%;
    padding: 20px;
  }
</style>
