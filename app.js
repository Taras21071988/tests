var swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
})
document.addEventListener('DOMContentLoaded', () => {
	const title = document.querySelector('.main__title')
	const text = title.textContent
	title.innerHTML = ''

	text.split('').forEach((char, index) => {
		const span = document.createElement('span')
		if (char === ' ') {
			span.innerHTML = '&nbsp;'
		} else {
			span.textContent = char
		}
		span.style.animationDelay = `${index * 0.05}s`
		title.appendChild(span)
	})
})
