<template>
  <div class="auth_signup__wrapper">
    <div class="compose">
      <div class="logo">
        <img src="../../assets/img/icon.png" alt="main icon">
      </div>
      <div class="form">
        <Inp v-model="login" placeholder="Логин" />
        <Inp v-model="name" placeholder="Имя" />
        <Inp v-model="lastname" placeholder="Фамилия" />
        <Inp v-model="password" placeholder="Пароль" password />
      </div>
      <div class="submit">Войти</div>
      <div class="help">
        <div @click="$emit('login')">Есть аккаунт</div>
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
      login: '',
      name: '',
      lastname: '',
      password: '',
    };
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .auth_signup__wrapper {
    height: 100%;
    .compose {
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .form {
        .inp__wrapper {
          margin-top: 25px;
          &:first-child {
            margin-top: 10px;
          }
        }
      }
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
