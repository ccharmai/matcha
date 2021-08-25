<template>
	<div class="layout__wrapper page__wrapper">
		<div class="header__wrapper">
			<div class="icon"><Logo /></div>
			<div class="nav-btn flex-left usual" @click="$router.push('/about')">О нас</div>
			<div class="nav-btn special" @click="$router.push('/auth')">Вход</div>
		</div>
		<div class="content__wrapper" :class="{ 'overflow': currentPage == 'Terms' || currentPage == 'About' }">
			<slot />
		</div>
		<div class="footer__wrapper">
			<div>&copy; matcha 2021-{{ new Date().getFullYear() }} by <a href="https://profile.intra.42.fr/users/ccharmai" target="_blank">ccharmai</a></div>
			<div><router-link to="/terms">Правила использования</router-link></div>
		</div>
		<div class="prefetch">
			<img src="../../assets/img/main-page.png" >
		</div>
	</div>
</template>

<script>
import Logo from '@/components/shared/Logo.vue';

export default {
	components: { Logo },
	computed: {
		currentPage() {
			return this.$route.name;
		}
	},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.layout__wrapper {
		display: flex;
		flex-direction: column;
		background: $pinkGradient;
		.header__wrapper {
			display: flex;
			align-items: center;
			padding: 20px 30px;
			.nav-btn {
				color: $white;
				font-weight: 800;
				padding: 10px 20px;
				margin-right: 10px; &:last-child {margin-right: 0;}
				cursor: pointer;
				font-size: 1.3em;
				white-space: nowrap;
				&.usual {
					transition: .3s $anim transform;
					&:hover { transform: translateY(-2px); }
				}
				&.special {
					border-radius: 10px;
					border: 2px solid $white;
					transition: .3s $anim transform, background, color;
					&:hover {
						transform: translateY(-2px);
						background: $white;
						color: $pink;
					}
				}
			}
		}
		.footer__wrapper {
			margin-top: auto;
			padding: 7px 15px;
			color: $white;
			font-size: 0.9em;
			a { color: #7d0014; }
			display: flex;
			justify-content: space-between;
		}
		.content__wrapper {
			flex-grow: 1;
			&.overflow { overflow: scroll; }
		}
		.prefetch { display: none; }
	}
</style>
