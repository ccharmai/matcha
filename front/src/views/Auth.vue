<template>
  <div class="page_auth__wrapper">
    <div class="auth-container animate__animated animate__backInDown" ref="authContainer">
      <Login v-if="currentPage == 'login' " />
    </div>
  </div>
</template>

<script>
import 'animate.css';
import Login from '@/components/Auth/Login.vue';

export default {
  data() {
    return {
      currentPage: 'login',
    };
  },
  components: {
    Login,
  },
  methods: {
    enter() {
      // if login is successful
      // hide auth block and go to the main page
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
    }
  }
</style>
