<script setup>
	definePageMeta(transition)

	watch(() =>
		[general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {

		if(transitionFinish && !preloaderVisibility) {
			contentAnimation({type: 'text', element: '.page-content__block-text'})
			contentAnimation({type: 'image', element: '.page-content__block-photo'})
			contentAnimation({type: 'text', element: '.page-next__project'})
		}
	})

</script>
<template>

	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			:page-name="`project-${$route.params.id}`"
			:title="`project ${$route.params.id}`"
		>

			<div class="page-content">
				<div class="page-content__block">
					<!-- <div class="page-content__block-photo">
						<img src="/photo.jpeg">
					</div> -->
					<div class="page-content__block-text p1">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/TJJNyw1U8V4?si=dRZ22Ib0O0OYekUE" title="YouTube video player"
							frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
							picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
				</div>

				<div class="page-next__project">
					<nuxt-link
						class="page-next__project-link hover-fadein h1"
						:to="`/gallery/${+$route.params.id+1}`"
					>
						next project
					</nuxt-link>
				</div>

			</div>

		</NuxtLayout>
	</div>

</template>
<style lang='scss' scoped>

.page-content__block {
	padding: 32px 0;
}
.page-content__block-text {
	margin-top: 10px;
}
.page-next__project {
	padding-bottom: 32px;
	margin-top: 32px;
}
.page-next__project-link {
	text-transform: uppercase;
}

</style>