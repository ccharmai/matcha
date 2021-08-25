<template>
	<div class="auth_sign_up__wrapper ">
		<div class="first login-block" v-show="currentStep == 1">
			<div class="logo"><img src="../../assets/img/icon.png" /></div>
			<div class="header">Регистрация</div>
			<div class="form">
				<div class="input-group">
					<div class="title">Логин</div>
					<div class="input"><input type="text" v-model="login"></div>
				</div>
				<div class="input-group">
					<div class="title">Имя</div>
					<div class="input"><input type="text" v-model="name"></div>
				</div>
				<div class="input-group">
					<div class="title">Фамилия</div>
					<div class="input"><input type="text" v-model="lastname"></div>
				</div>
				<div class="input-group">
					<div class="title">Пароль</div>
					<div class="input"><input type="password" v-model="password"></div>
				</div>
			</div>
			<div class="login-btn">Создать аккаунт</div>
			<div class="help-tools">
				<div @click="$emit('log')">Уже зарегистрирован?</div>
			</div>
		</div>
		<div class="second login-block" v-show="currentStep == 2">
			<loader v-if="status == 0" object="#ff7676" color1="#fd0e42" color2="#f54ea2" size="7" speed="2" bg="#343a40" objectbg="#999793" opacity="0" disableScrolling="false" name="circular"></loader>
			<div v-if="status == -1"><svg class="err" id="Capa_1" enable-background="new 0 0 511.753 511.753" height="512" viewBox="0 0 511.753 511.753" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m398.374 299.07v-29.89c0-19.279-12.008-35.796-28.933-42.495v-75.287c.001-83.48-67.917-151.398-151.399-151.398s-151.399 67.918-151.399 151.399v75.287c-16.925 6.699-28.933 23.215-28.933 42.494v196.88c0 25.195 20.497 45.692 45.692 45.692h281.696c60.071 0 108.943-48.872 108.943-108.943.001-48.47-31.82-89.641-75.667-103.739zm-33.275-5.203c-59.487 0-107.982 47.927-108.921 107.194h-188.468v-131.881c0-8.653 7.04-15.692 15.692-15.692h269.279c8.652 0 15.692 7.04 15.692 15.692v24.74c-1.087-.032-2.178-.053-3.274-.053zm-85.657-70.379h-122.799v-72.089c0-33.855 27.544-61.399 61.399-61.399s61.399 27.543 61.399 61.399v72.089zm-61.4-193.488c66.94 0 121.399 54.459 121.399 121.399v72.089h-30v-72.089c0-50.397-41.002-91.399-91.399-91.399s-91.399 41.001-91.399 91.399v72.089h-30v-72.089c0-66.94 54.46-121.399 121.399-121.399zm-134.639 451.753c-8.652 0-15.692-7.04-15.692-15.692v-35h192.168c5.275 19.626 15.901 37.082 30.22 50.692zm281.696 0c-43.529 0-78.943-35.414-78.943-78.943s35.414-78.943 78.943-78.943 78.943 35.414 78.943 78.943-35.414 78.943-78.943 78.943z"/><path d="m398.274 367.839c-6.011-5.702-15.506-5.451-21.205.559l-11.97 12.618-11.97-12.618c-5.701-6.01-15.195-6.262-21.205-.559-6.011 5.702-6.261 15.196-.559 21.206l13.058 13.764-13.058 13.764c-5.702 6.01-5.452 15.504.559 21.206 6.001 5.695 15.497 5.458 21.205-.559l11.97-12.618 11.97 12.618c5.708 6.017 15.205 6.254 21.205.559 6.011-5.702 6.261-15.196.559-21.206l-13.058-13.764 13.058-13.764c5.702-6.01 5.452-15.504-.559-21.206z"/></g></svg></div>
			<Check v-if="status == 1" />
		</div>
	</div>
</template>

<script>
import Check from "@/components/shared/Check.vue";

export default {
	components: {
		Check,
	},
	data() {return {
		currentStep: 1,
		login: '',
		name: '',
		lastname: '',
		password: '',
		// 0 means loading, 1 means ok, -1 means error
		status: 0,
	}},
	methods: {
		loginClick() {
			this.currentStep = 2;

			// cheeeeck
			let login = true;
			setTimeout(() => {
				if (login) {
					this.status = 1;
					this.$emit('enter');
				}
				else {
					this.status = -1;
					setTimeout(() => { this.currentStep = 1; this.status = 0; }, 800);
				}
			}, 1000);
			//setTimeout(() => { this.$emit('enter') }, 500);
		},
	},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.auth_sign_up__wrapper {
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
			justify-content: space-around;
		}
		.input-group {
			.input { flex-basis: 65%; width: 65%; }
			margin-top: 10px;
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
		.second {
			display: flex;
			align-items: center;
			justify-content: center;
			svg {
				height: 100px;
				&.err {
					path { fill: $red; }
					position: relative;
					left: 5px;
				}
			}
		}
	}
</style>
