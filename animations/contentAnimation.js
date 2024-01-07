export function contentAnimation({ type, element }) {
	const elements = document.querySelectorAll(element)

	elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
			animation: type === "text" ? useAnimateText(el) : useAnimateImage(el),
			scrub: true,
			// start: "top center",
			// pin: true,
			end: "+=400",
			// markers: true,
		})
	})
}