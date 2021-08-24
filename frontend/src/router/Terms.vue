<template>
	<div class="page_terms__wrapper page__wrapper">
		<div class="terms_header__wrapper"><Logo /></div>
		<div class="terms_content__wrapper">
			<h2>Общие положения</h2>
			<p>Регистрируясь на данном ресурсе Вы даете свое согласие на сбор, обработку, хранение и продажу третьим лицам вашей персональной информации.</p>
			<p>Любые претензии по работе сервиса игнорируются.</p>
			<h2>Ваша безопасность</h2>
			<p>Не соглашайтесь на встречи и общение если Вы не уверены в своем собеседнике / партнере.</p>
			<p>Не передавайте ему такую личную информацию как адрес, паспортные данные.</p>
			<h2>Предостережение</h2>
			<p>Отправляя личные фотографии будьте готовы к тому, что они могут стать достоянием общественности.</p>
			<p>Строго говоря, мы вообще рекомендуем этого не делать.</p>
		</div>
	</div>
</template>

<script>
import Logo from '@/components/litt/Logo.vue';

export default {
	components: {
		Logo,
	}
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.page_terms__wrapper {
		background: $pinkGradient;
		.terms_header__wrapper { padding: 20px 30px; }
		.terms_content__wrapper {
			width: 80%;
			margin: 0 auto;
			margin-top: 50px;
			color: $white;
			font-weight: 600;
			h2 {
				margin-top: 50px;
				&:first-child { margin-top: 0; }
			}
		}
	}
</style>
