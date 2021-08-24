<template>
	<div class="home__wrapper page__wrapper">
		<div class="header__wrapper">
			<div class="icon"><Logo /></div>
			<div class="nav-btn flex-left usual">О нас</div>
			<div class="nav-btn special">Вход</div>
		</div>
		<div class="content__wrapper">
			<div class="slogan">
				<div class="top">Matcha - Dating APP</div>
				<div>Make love, not war</div>
			</div>
			<img src="../assets/img/main-page.png" />
		</div>
		<div class="footer__wrapper">
			<div>&copy; matcha 2021-{{ new Date().getFullYear() }} by <a href="https://profile.intra.42.fr/users/ccharmai" target="_blank">ccharmai</a></div>
			<div><router-link to="/terms">Правила использования</router-link></div>
		</div>
	</div>
</template>

<script>
import Logo from '@/components/litt/Logo.vue';

export default {
	components: {
		Logo,
	},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.home__wrapper {
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
			a { color: $grey; }
			display: flex;
			justify-content: space-between;
		}
		.content__wrapper {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img { display: block; width: 80vh; }
			.slogan {
				color: $white;
				font-weight: bold;
				width: 80%;
				//position: relative;
				//top: 50px;
				div:first-child { font-size: 3em; }
				div:last-child { font-size: 2em; }
				//align-items: flex-start;
			}
		}
	}
</style>
