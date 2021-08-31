<template>
  <div class="layout_the_footer__wrapper">
    <div>&copy; matcha 2021-{{ new Date().getFullYear() }} by ccharmai</div>
    <div><router-link to="/terms">Правила использования</router-link></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .layout_the_footer__wrapper {
    padding: 7px 15px;
    color: $white;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
  }
</style>
