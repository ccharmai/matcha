<template>
  <div class="auth_login__wrapper">
    <div class="compose" v-if="!loading">
      <div class="logo">
        <img src="../../assets/img/icon.png" alt="main icon">
      </div>
      <div class="form" @keyup.enter="loginHandler()">
        <Inp v-model="login" placeholder="Логин" />
        <Inp v-model="password" placeholder="Пароль" password />
      </div>
      <div class="submit" :class="{ 'disabled': isBtnDisabled }" @click="loginHandler()">Войти</div>
      <div class="help">
        <div @click="$emit('signup')">Нет аккаунта?</div>
        <div @click="$emit('forgot')">Забыл пароль?</div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <loader
        object="#ff7676"
        color1="#fd0e42"
        color2="#f54ea2"
        size="7"
        speed="2"
        bg="#343a40"
        objectbg="#999793"
        opacity="0"
        disableScrolling="false"
        name="circular"
      />
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
      password: '',
      loading: false,
    };
  },
  methods: {
    loginHandler() {
      if (this.isBtnDisabled) return;
      this.loading = true;
      const apiUrl = `${this.$store.getters.api}/login`;
      const apiParams = {
        method: 'POST',
        body: JSON.stringify({ login: this.login, password: this.password }),
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(apiUrl, apiParams)
        .then((response) => {
          if (!response.ok) { throw response; }
          return response.json();
        })
        .then((data) => {
          this.$store.dispatch('login', data);
          this.loading = false;
          this.$emit('enter');
        })
        .catch(() => {
          this.loading = false;
          console.log('Ошибка');
        });
    },
  },
  computed: {
    isBtnDisabled() {
      return !(this.login.length > 0 && this.password.length > 0);
    },
  },
  created() {
    const user = this.$store.getters.getUser;
    if (user.auth) this.$router.replace('/');
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .auth_login__wrapper {
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
        transition: .3s $anim opacity;
        &.disabled {
          opacity: .5;
          cursor: not-allowed;
        }
      }
      .help {
        font-size: 0.8em;
        color: $grey;
        & > div {
          cursor: pointer;
        }
      }
    }
    .loading {
      height: 100%;
    }
  }
</style>
