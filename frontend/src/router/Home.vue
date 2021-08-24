<template>
	<Intro>
		<div class="slot__wrapper">
			<div class="slogan">
				<div class="top">Matcha - Dating APP</div>
				<div>Make love, not war</div>
			</div>
			<img src="../assets/img/main-page.png" />
		</div>
	</Intro>
</template>

<script>
import Intro from "@/components/layouts/Intro.vue";

export default {
	components: { Intro },
}
</script>

<style lang="scss">
	@import "@/assets/vars.scss";
	.slot__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		img { display: block; width: 80vh; }
		.slogan {
			color: $white;
			font-weight: bold;
			width: 80%;
			div:first-child { font-size: 3em; }
			div:last-child { font-size: 2em; }
		}
	}
</style>
