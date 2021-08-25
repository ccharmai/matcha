<template>
	<div class="page_guide__wrapper page__wrapper">
		<div class="header__wrapper"><Logo /></div>
		<div class="content__wrapper">
			<div class="guide__wrapper">
				<div class="sex-choose">
					<div class="title">Выбери свой пол</div>
					<div class="items__list">
						<div class="item" v-for="s in sex.list" :key="s.name">
							<div class="selector"></div>
							<div class="label">{{ s.label }}</div>
						</div>
					</div>
				</div>
				<div class="orientation-choose"></div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from "@/components/shared/Logo.vue";

export default {
	components: {
		Logo,
	},
	data() {return {
		sex: {
			current: null,
			list: [
				{ name: 'male', label: 'Мужской' },
				{ name: 'female', label: 'Женский' },
			],
		},
		orientation: {
			current: null,
			list: [
				{ name: 'getero', label: 'Гетеро' },
			],
		},
	}},
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.page_guide__wrapper {
		background: $pinkGradient;
		display: flex;
		flex-direction: column;
		.header__wrapper {
			margin-top: 20px;
			display: flex;
			justify-content: center;
			padding: 20px;
		}
		.content__wrapper {
			height: 100%;
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.guide__wrapper {
			background: rgba(255, 255, 255, .4);
			width: 80%;
			height: 80%;
			border-radius: 20px;
		}
		.sex-choose {
			color: #404040;
			padding: 20px;
			.title { text-align: center; font-weight: bold; font-size: 1.5em; }
		}
		.selector {
			cursor: pointer;
			width: 20px;
			height: 20px;
			border: 2px solid $pink;
			border-radius: 5px;
		}
	}
</style>
