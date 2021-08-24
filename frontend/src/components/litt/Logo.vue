<template>
	<div class="litt_logo__wrapper" @click="$router.push('/')">
		<div class="compose">
			<div class="icon"><img src="../../assets/img/icon.png" /></div>
			<div class="text">matcha</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.litt_logo__wrapper {
		cursor: pointer;
		.compose {
			display: flex;
			align-items: center;
			.text {
				font-weight: bold;
				font-size: 3em;
				color: white;
				margin-left: 10px;
			}
		}
	}
</style>
