const cards = document.querySelectorAll('.maket')

for (let i = 0; i < cards.length; i++){
	const card = cards[i]
	card.addEventListener('mousemove', startRotate)
	card.addEventListener('mouseout', stopRotate)
}



function startRotate(event) {
  const screenshot =  this.querySelector('.screenshot')
  const halfHeight = screenshot.offsetHeight / 2
  const halfWidth = screenshot.offsetWidth / 2

  screenshot.style.transform = 'rotateX(' + - 
  (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + 
  (event.offsetX - halfWidth) / 5 + 'deg)'
}

function stopRotate(event) {
  const screenshot =  this.querySelector('.screenshot')
  screenshot.style.transform = 'rotate(0)'
}  

