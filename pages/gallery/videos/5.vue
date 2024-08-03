<script setup>
	definePageMeta(transition)

	watch(() =>
		[general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {

		if (transitionFinish && !preloaderVisibility) {
			contentAnimation({ type: 'text', element: '.page-content__block' })
		}
	})

</script>
<template>

	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			:page-name="`project-${$route.params.id}`"
			:title="`Pokemon Fantasma`"
		>

		<div class="page-content">
				<div class="page-content__block p1">
					O vídeo é 100% feito por mim, eu gravei a gameplay, fiz os cortes, o roteiro, narrei, sincronizei áudio e vídeo, e usei um pouco de motion para fazer algumas animações simples no vídeo.
				</div>

				<div class="page-content__block p1">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/lq-oo2M9LdM?si=PT4IKV2IIIpknBbB" title="YouTube video player" frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
					</iframe>
				</div>
			</div>

		</NuxtLayout>
	</div>

</template>
<style lang='scss' scoped>
.page-content {
	padding-bottom: 10vh;
	width: auto;
	max-width: 600px;
}

.page-content__block {
	padding-bottom: 32px;
	display: flex;
} 

.page-content__block iframe {
	margin: auto;
}
</style>