<template>
	<Intro>
		<div class="auth_content">
			<div class="login_block auth_block animate__animated animate__backInDown" ref="loginBlock" v-show="currentPage=='login'">
				<SignIn @enter="enter()" @reg="reg()" />
			</div>
			<div class="signup_block auth_block animate__animated animate__backInRight" ref="signupBlock" v-show="currentPage=='signup'">
				<SignUp @log="login()" />
			</div>
		</div>
	</Intro>
</template>

<script>
import 'animate.css';
import Intro  from "@/components/layouts/Intro.vue";
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";

export default {
	components: {
		Intro,
		SignIn,
		SignUp,
	},
	data() {return {
		currentPage: 'login',
	}},
	methods: {
		enter() {
			this.$refs.loginBlock.classList.remove('animate__backInDown');
			this.$refs.loginBlock.classList.add('animate__backOutUp');
			setTimeout(() => { this.$router.push('/guide') }, 700);
		},
		reg() {
			this.$refs.signupBlock.classList.remove('animate__backOutRight');
			this.$refs.signupBlock.classList.add('animate__backInRight');
			this.$refs.loginBlock.classList.remove('animate__backInLeft');
			this.$refs.loginBlock.classList.remove('animate__backInDown');
			this.$refs.loginBlock.classList.add('animate__backOutLeft');
			setTimeout(() => { this.currentPage = 'signup' }, 500);
		},
		login() {
			this.$refs.signupBlock.classList.remove('animate__backInLeft')
			this.$refs.signupBlock.classList.add('animate__backOutRight')
			this.$refs.loginBlock.classList.remove('animate__backOutLeft')
			this.$refs.loginBlock.classList.add('animate__backInLeft')
			setTimeout(() => { this.currentPage = 'login' }, 500);
		}
	},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.auth_content {
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.auth_block {
			width: 350px;
			height: 500px;
			background: $white;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0 0 20px 0px #9a9a9a;
		}
	}
</style>
