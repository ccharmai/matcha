<template>
  <div class="layout_the_header__wrapper">
    <div class="logo"><Logo /></div>
    <template v-if="user.auth">
      <div class="controls">
        <div>
          <ExpandBlock :text="user.name">
            <div class="menu">
              <div class="menu-item">Перейти к анкетам</div>
              <div class="menu-item">Настройки профиля</div>
              <div class="menu-item exit" @click="logout()">Выход</div>
            </div>
          </ExpandBlock>
        </div>
      </div>
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
import ExpandBlock from '@/components/Shared/ExpandBlock.vue';

export default {
  components: {
    Logo,
    ExpandBlock,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
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
    .menu {
      color: $white;
      font-weight: 600;
      width: 100%;
      font-size: 0.9em;
      .menu-item {
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        padding: 5px;
        border-bottom: 2px solid #c3c3c33b;
        &:last-child {
          border-bottom: none;
        }
        &.exit {
          color: #9c0202;
        }
      }
    }
  }
</style>
