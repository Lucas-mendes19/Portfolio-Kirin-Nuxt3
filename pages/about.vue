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
		<NuxtLayout name="custom" page-name="sobre" title="sobre">

			<div class="page-content">
				<div class="page-content__block p1">
					Olá eu sou o Pedro, <strong>(comumente chamado de Kirin na internet)</strong>
				</div>
				<div class="page-content__block p1">
					Minha história com edição de vídeo é antiga, mas com um grande hiato no meio, comecei em 2015 editando
					meus próprios video de Minecraft, eu não sabia oque estava fazendo, mas gostava bastante, mas fui
					crescendo e acabei largando de lado edição e meus vídeos por uns bons anos. Mas em 2023 eu e mais 3
					amigos decidimos criar um canal no YouTube e como eu era o único com um minimo de noção de edição acabei
					ficando com essa função, me descobri um apaixonado por essa área, desde o roteiro, mixagem de som,
					edição de vídeo, colorgrading e motion desing. Desde então comecei a consumir muito conteúdo tanto no
					próprio YouTube como em cursos na Alura para aprender mais sobre edição de vídeo, e recentemente comecei
					a cursar Cinema, também com o intuito de melhorar mais e mais como video maker. </div>

				<div class="page-content__block p1">
					Esse é meu portifolio, se tiver interesse em meus serviços, basta me contactar nos contatos a baixo:
				</div>
			</div>

		</NuxtLayout>
	</div>
</template>
<style lang='scss' scoped>
.page-content {
	padding-bottom: 25vh;
	width: auto;
	max-width: 600px;
}

.page-content__block {
	padding-bottom: 32px;
}
</style>