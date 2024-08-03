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
			:title="`Pokemon Terra`"
		>

		<div class="page-content">
				<div class="page-content__block p1">
					O vídeo é 100% feito por mim, eu gravei a gameplay, fiz os cortes, o roteiro, narrei, sincronizei áudio e vídeo,  esse foi o primeiro vídeo que trabalhei com motion, ainda estava bem  amador mas o resultado foi satisfatório, eu fiz uma animação para quando ganhava um item no jogo, onde o item girava em 3 na tela pot alguns segundos seguido de um som. (Um exemplo pode ser visto no minuto 8:19)
				</div>

				<div class="page-content__block p1">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/TJJNyw1U8V4?si=Txkpq6HDaXqzRtcl" title="YouTube video player" frameborder="0"
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