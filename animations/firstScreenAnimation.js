export function firstScreenAnimation({ parent }) {
	const parentEl = document.querySelector(parent)
	const title = parentEl.querySelector('.title-default__wrap')
	const header = parentEl.querySelector('.header')
	const pageMask = parentEl.querySelector('.page-mask')

	const tl = gsap.timeline()

	tl.to(pageMask, {
		opacity: 0
	})
	tl.from(title, {
		yPercent: 100,
		opacity: 0,
		clearProps: 'all',
		delay: 0.37,
		duration: 0.6
	})
	tl.from(header, {
		opacity: 0,
		clearProps: 'all',
		delay: 0.4,
		duration: 0.7
	})
}