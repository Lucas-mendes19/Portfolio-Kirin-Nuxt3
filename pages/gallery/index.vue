<script setup>
definePageMeta(transition)

watch(() =>
	[general.isTransitionFinish, general.isPreloaderVisible],
	([transitionFinish, preloaderVisibility]) => {
		console.log(general.pageBg);
		if (transitionFinish && !preloaderVisibility) {
			contentAnimation({ type: 'text', element: '.container h2' })

			testAnimation()
		}
	})

</script>
<template>
	<div :class="general.pageBg">
		<NuxtLayout name="custom" page-name="galeria" title="galeria">

			<div class="container">
				<h2 :class="general.pageBg">Videos</h2>

				<div class="gallery">
					<ul class="cards">
						<li class="hover-image">
							<img src="/thumbnails/alura.png">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/sonhos_e_ambicoes.jpeg">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/Pokemon_tipo_eletrico.jpg">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/tempo.png">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/pokemon_tipo_fantasma.jpg">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/mine_dos_crias.jpg">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/pokemon_tipo_rocha.jpg">
						</li>
						<li class="hover-image">
							<img src="/thumbnails/bioshock_inf.jpg">
						</li>
					</ul>
				</div>
				<div class="drag-proxy"></div>
			</div>
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

.container {
	text-align: center;
	line-height: 10vh;
}

.container h2 {
	font-size: 1.8em;
	padding: 2em 0em;
}

.container {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.gallery {
	position: absolute;
	width: 100%;
	height: 100vh;
	overflow: hidden;
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
	// background-color: rgba(212, 0, 0, 0.833);
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

.drag-proxy {
	visibility: hidden;
	position: absolute;
}
</style>