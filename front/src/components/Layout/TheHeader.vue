<template>
  <div class="layout_the_header__wrapper">
    <div class="logo"><Logo /></div>
    <template v-if="user.auth">
      <div class="controls">Авторизован</div>
    </template>
    <template v-if="!user.auth">
      <div class="controls">
        <router-link to="/about" class="nav-btn">О matcha</router-link>
        <router-link to="/auth" class="nav-btn login">Войти</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import Logo from '@/components/Layout/Logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .layout_the_header__wrapper {
    padding: 25px;
    display: flex;
    align-items: center;
    .controls {
      margin-left: auto;
      font-weight: 500;
      .nav-btn {
        a {
          display: block;
        }
        margin-left: 10px;
        color: $white !important;
        font-size: 1.2em;
        font-weight: 600;
        &:first-child {
          margin-left: 0;
        }
        &.login {
          border: 3px solid $white;
          padding: 3px 7px;
          border-radius: 10px;
          margin-left: 20px;
          transition: .3s $anim background;
          &:hover {
            background: #d3d3d33b;
          }
        }
      }
    }
  }
</style>
