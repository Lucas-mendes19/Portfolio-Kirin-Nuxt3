<script setup>
definePageMeta(transition)

watch(() =>
	[general.isTransitionFinish, general.isPreloaderVisible],
	([transitionFinish, preloaderVisibility]) => {
		if (transitionFinish && !preloaderVisibility) {
			contentAnimation({ type: 'text', element: '.g-youtube h2' })
			contentAnimation({ type: 'text', element: '.c-youtube' })

			carouselAnimation({ elementTag: '.c-youtube', elementDrag: '.d-youtube' })

			contentAnimation({ type: 'text', element: '.g-effecs h2' })
			contentAnimation({ type: 'text', element: '.c-effecs' })

			carouselAnimation({ elementTag: '.c-effecs', elementDrag: '.d-effecs' })

			contentAnimation({ type: 'text', element: '.g-short h2' })
			contentAnimation({ type: 'text', element: '.c-short' })

			carouselAnimation({ elementTag: '.c-short', elementDrag: '.d-short' })
		}
	})

</script>
<template>
	<div :class="general.pageBg">
		<NuxtLayout name="custom" page-name="galeria" title="galeria">

			<div class="g-youtube gallery">
				<h2 :class="general.pageBg">Videos Youtube</h2>
				
				<ul class="c-youtube cards">
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/1`">
							<img src="/thumbnails/alura.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/2`">
							<img src="/thumbnails/sonhos_e_ambicoes.jpeg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/3`">
							<img src="/thumbnails/Pokemon_tipo_eletrico.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/4`">
							<img src="/thumbnails/tempo.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/5`">
							<img src="/thumbnails/pokemon_tipo_fantasma.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/6`">
							<img src="/thumbnails/mine_dos_crias.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/7`">
							<img src="/thumbnails/pokemon_tipo_rocha.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/8`">
							<img src="/thumbnails/bioshock_inf.jpg">
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="d-youtube drag-proxy"></div>

			<div class="g-effecs gallery">
				<h2 :class="general.pageBg">Videos Animações</h2>
				
				<ul class="c-effecs cards">
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/1`">
							<img src="/thumbnails/alura.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/2`">
							<img src="/thumbnails/sonhos_e_ambicoes.jpeg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/3`">
							<img src="/thumbnails/Pokemon_tipo_eletrico.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/4`">
							<img src="/thumbnails/tempo.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/5`">
							<img src="/thumbnails/pokemon_tipo_fantasma.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/6`">
							<img src="/thumbnails/mine_dos_crias.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/7`">
							<img src="/thumbnails/pokemon_tipo_rocha.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/8`">
							<img src="/thumbnails/bioshock_inf.jpg">
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="d-effecs drag-proxy"></div>

			<div class="g-short gallery">
				<h2 :class="general.pageBg">Videos Curtos</h2>
				
				<ul class="c-short cards">
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/1`">
							<img src="/thumbnails/alura.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/2`">
							<img src="/thumbnails/sonhos_e_ambicoes.jpeg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/3`">
							<img src="/thumbnails/Pokemon_tipo_eletrico.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/4`">
							<img src="/thumbnails/tempo.png">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/5`">
							<img src="/thumbnails/pokemon_tipo_fantasma.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/6`">
							<img src="/thumbnails/mine_dos_crias.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/7`">
							<img src="/thumbnails/pokemon_tipo_rocha.jpg">
						</nuxt-link>
					</li>
					<li class="hover-image">
						<nuxt-link :to="`/gallery/videos/8`">
							<img src="/thumbnails/bioshock_inf.jpg">
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="d-short drag-proxy"></div>
			
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
	height: 60vh;
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
	top: 60%;
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