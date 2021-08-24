<template>
	<div class="auth_sign_in__wrapper">
		<div class="first login-block" v-show="currentStep == 1">
			<div class="logo"><img src="../../assets/img/icon.png" /></div>
			<div class="header">Вход</div>
			<div class="form">
				<div class="input-group">
					<div class="title">Логин</div>
					<div class="input"><input type="text" v-model="info.login"></div>
				</div>
				<div class="input-group">
					<div class="title">Пароль</div>
					<div class="input"><input type="password" v-model="info.password"></div>
				</div>
			</div>
			<div class="login-btn" @click="loginClick()">Войти</div>
			<div class="help-tools">
				<div>Нет аккаунта?</div>
				<div>Забыл пароль?</div>
			</div>
		</div>
		<div class="second login-block" v-show="currentStep == 2">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, aperiam!
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: { type: Object },
	},
	data() {return {
		currentStep: 1,
	}},
	methods: {
		loginClick() {
			console.log('on login btn clicked');
			console.log(this.info.login);
			console.log(this.info.password);
		},
	},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.auth_sign_in__wrapper {
		width: 100%;
		height: 100%;
		.logo {
			display: flex;
			justify-content: center;
		}
		.header {
			font-weight: bold;
			font-size: 1.4em;
			text-align: center;
		}
		.login-block {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}
		.input-group {
			.input { flex-basis: 70%; width: 70%; }
			margin-top: 15px;
		}
		.help-tools {
			margin-top: 20px;
			text-align: center;
			font-size: 0.9em;
			font-weight: 600;
			padding: 5px;
			cursor: pointer;
		}
		.login-btn {
			margin-top: 10px;
			padding: 10px 20px;
			background: $pinkGradient;
			align-self: center;
			color: $white;
			font-weight: bold;
			border-radius: 10px;
			cursor: pointer;
			transition: .1s $anim transform;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
</style>
