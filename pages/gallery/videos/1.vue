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
			:title="`Video da Alura`"
		>

		<div class="page-content">
				<div class="page-content__block p1">
					Esse vídeo é o projeto final de um curso que fiz na alura sobre a extensão fusion do Davinci Resolve.
				</div>

				<div class="page-content__block p1">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/0iX3wDLPtYs?si=58vjUuxKhhcUhZlU" title="YouTube video player" frameborder="0"
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