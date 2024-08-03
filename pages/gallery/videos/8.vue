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
			:title="`Video do Bioshock `"
		>

		<div class="page-content">
				<div class="page-content__block p1">
					O video trata-se de um compilado da gravação do jogo Bioshock Infinite, onde mais uma vez tentei sincronizar música, e video, e temtar trazer um tom mais cômico ao vídeo. 
				</div>

				<div class="page-content__block p1">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/FVIyRSW5m3U?si=lDJYnNmo3Q4gEvKV" title="YouTube video player" frameborder="0"
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