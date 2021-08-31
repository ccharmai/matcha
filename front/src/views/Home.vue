<template>
  <div class="page_home__wrapper">
    <div class="slogan">
      <div class="top-slogan">Matcha - Dating APP</div>
      <div class="bottom-slogan">Make love, not war</div>
    </div>
    <div class="img-container">
      <img src="../assets/img/main-page.png" alt="Main page image">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .page_home__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .img-container {
      width: 60%;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        max-width: 900px;
      }
    }
    .slogan {
      color: $white;
      font-weight: bold;
      width: 80%;
      .top-slogan {
        font-size: 3em;
      }
      .bottom-slogan {
        font-size: 2em;
      }
    }
  }
</style>
