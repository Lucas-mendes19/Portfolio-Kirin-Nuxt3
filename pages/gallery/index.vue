<script setup>
definePageMeta(transition)

watch(() =>
	[general.isTransitionFinish, general.isPreloaderVisible],
	([transitionFinish, preloaderVisibility]) => {
		if (transitionFinish && !preloaderVisibility) {
			contentAnimation({ type: 'text', element: '.gallery h2' })
			contentAnimation({ type: 'text', element: '.cards' })

			carouselAnimation()
		}
	})

</script>
<template>
	<div :class="general.pageBg">
		<NuxtLayout name="custom" page-name="galeria" title="galeria">

			<div class="gallery">
				<h2 :class="general.pageBg">Videos</h2>
				
				<ul class="cards">
					<li class="hover-image">
						<nuxt-link :to="`/gallery/1`">
							<img src="/thumbnails/alura.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/2`">
							<img src="/thumbnails/sonhos_e_ambicoes.jpeg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/3`">
							<img src="/thumbnails/Pokemon_tipo_eletrico.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/4`">
							<img src="/thumbnails/tempo.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/5`">
							<img src="/thumbnails/pokemon_tipo_fantasma.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/6`">
							<img src="/thumbnails/mine_dos_crias.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/7`">
							<img src="/thumbnails/pokemon_tipo_rocha.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/8`">
							<img src="/thumbnails/bioshock_inf.jpg">
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="drag-proxy"></div>
			
		</NuxtLayout>
	</div>
</template>

<style lang='scss' scoped>
.page-content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 15px;
	align-items: flex-start;
	width: 70%;
}

.gallery {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	text-align: center;
	line-height: 10vh;
}

.gallery h2 {
	font-size: 1.8em;
	padding: 2em 0em;
}

.cards {
	position: absolute;
	width: 34rem;
	height: 18rem;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.cards li {
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	padding: 0;
	margin: 0;
	width: 34rem;
	height: 18rem;
	text-align: center;
	line-height: 18rem;
	font-size: 2rem;
	font-family: sans-serif;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 0.8rem;
}

.cards li img {
	width: auto;
	height: 15rem;
	border-radius: 1.3rem;
}

.drag-proxy {
	visibility: hidden;
	position: absolute;
}

@media screen and (max-width: 768px) {
	.cards {
		max-width: 15rem
	}

	.cards li {
		width: auto;
		height: auto;
	}

	.cards li img {
		width: auto;
		height: auto;
		border-radius: 1.3rem;
	}
}	
</style>