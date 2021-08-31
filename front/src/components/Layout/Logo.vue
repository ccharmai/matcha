<template>
  <router-link to="/">
    <div class="layouts_logo__wrapper">
      <div class="icon"><img src="../../assets/img/icon.png" alt="main icon image"></div>
      <div class="text">matcha</div>
    </div>
  </router-link>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .layouts_logo__wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
      }
    }
    .text {
      font-weight: bold;
      font-size: 2em;
      color: $white;
      margin-left: 10px;
    }
  }
</style>
