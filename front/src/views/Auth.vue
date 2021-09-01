<template>
  <div class="page_auth__wrapper">
    <div class="auth-container animate__animated animate__backInDown" ref="authContainer">
      <Login
        v-if="currentPage == 'login' "
        @forgot="currentPage = 'forgot' "
        @signup="currentPage = 'signup' "
        @enter="enter()"
      />
      <Forgot
        v-if="currentPage == 'forgot' "
        @login="currentPage = 'login' "
      />
      <Signup
        v-if="currentPage == 'signup' "
        @login="currentPage = 'login' "
      />
      <div class="enter" v-if="currentPage == 'enter' ">
        <img src="../assets/img/ok.png" alt="enter image">
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import Login from '@/components/Auth/Login.vue';
import Forgot from '@/components/Auth/Forgot.vue';
import Signup from '@/components/Auth/Signup.vue';

export default {
  data() {
    return {
      currentPage: 'login',
    };
  },
  components: {
    Login,
    Forgot,
    Signup,
  },
  methods: {
    enter() {
      this.currentPage = 'enter';
      this.$refs.authContainer.classList.remove('animate__backInDown');
      this.$refs.authContainer.classList.add('animate__backOutUp');
      setTimeout(() => {
        this.$router.push('/');
      }, 700);
    },
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .page_auth__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .auth-container {
      width: 300px;
      height: 450px;
      background: $white;
      border-radius: 20px;
      box-shadow: 0 5px 8px 0 #0000002b;
      .enter {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
