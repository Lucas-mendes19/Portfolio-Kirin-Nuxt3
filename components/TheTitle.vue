<script setup>

	const props = defineProps({
		text: String
	})

</script>
<template>

	<div class="title-default h1">
		<div class="title-default__wrap">
			<img v-if="general.pageBg === 'page_black'" src="/logo_branca.svg" alt="Kirin" />
			<img v-else src="/logo_preta.svg" alt="Kirin" />

			{{ text }}
			
			<small>Kirin</small>
		</div>
	</div>

</template>
<style lang='scss' scoped>

.title-default {
	height: 100vh;
	height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.title-default__wrap {
	will-change: transform;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}
.title-default__wrap img {
	max-height: 50vh;
}

.title-default__wrap small {
	font-size: 1.5rem;
	float: right;
	padding-bottom: 1rem;
}
</style>