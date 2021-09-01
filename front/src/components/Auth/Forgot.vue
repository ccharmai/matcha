<template>
  <div class="auth_forgot__wrapper">
    <div class="compose">
      <div class="logo">
        <img src="../../assets/img/icon.png" alt="main icon">
      </div>
      <div class="form">
        <Inp v-model="email" placeholder="Email" />
      </div>
      <div class="submit">Отправить письмо</div>
      <div class="help">
        <div @click="$emit('login')">Помню пароль</div>
      </div>
    </div>
  </div>
</template>

<script>
import Inp from '@/components/Shared/Inp.vue';

export default {
  components: {
    Inp,
  },
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .auth_forgot__wrapper {
    height: 100%;
    .compose {
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .submit {
        background: $pinkGradient;
        color: $white;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
      }
      .help {
        font-size: 0.8em;
        color: $grey;
        & > div {
          cursor: pointer;
        }
      }
    }
  }
</style>
