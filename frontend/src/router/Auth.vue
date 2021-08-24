<template>
	<Intro>
		<div class="auth_content">
			<div class="login_block auth_block animate__animated animate__backInDown">
				<SignIn :info="signIn"/>
			</div>
		</div>
	</Intro>
</template>

<script>
import 'animate.css';
import Intro from "@/components/layouts/Intro.vue";
import SignIn from "@/components/auth/SignIn.vue";

export default {
	components: {
		Intro,
		SignIn,
	},
	data() {return {
		signIn: { login: '', password: '' },
	}},
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
			width: 300px;
			height: 450px;
			background: $white;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0 0 20px 0px #9a9a9a;
		}
	}
</style>
