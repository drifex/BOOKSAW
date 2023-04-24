const carousel = document.querySelector('.card-carousel')
const cards = carousel.querySelectorAll('.card')
const cardWidth = cards[0].offsetWidth

let currentIndex = 0

carousel.addEventListener('wheel', e => {
  e.preventDefault()
  if (e.deltaY < 0) {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0
  } else if (e.deltaY > 0) {
    currentIndex =
      currentIndex < cards.length - 1 ? currentIndex + 1 : cards.length - 1
  }
  carousel.scroll({ left: cardWidth * currentIndex, behavior: 'smooth' })
})

window.addEventListener('resize', () => {
  cardWidth = cards[0].offsetWidth
  carousel.scroll({ left: cardWidth * currentIndex, behavior: 'smooth' })
});



