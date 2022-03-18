const documentBody = document.querySelector('body')
const showButton = document.querySelector('#samples--display')
const regularSamples = document.querySelector('.samples')
const hiddenSamples = document.querySelector('#samples--hidden')

documentBody.addEventListener('click', (e) => {
  e.stopPropagation()
  if(e.target === showButton && hiddenSamples.style.display == 'none') {
    regularSamples.style.display = 'none'
    hiddenSamples.style.display = 'flex'
    hiddenSamples.scrollIntoView(true, {behavior: 'smooth'})
    showButton.textContent = '- Show less'
  } else if(e.target === showButton && hiddenSamples.style.display == 'flex'){
    regularSamples.style.display = 'flex'
    setTimeout(() => {
      hiddenSamples.style.display = 'none'
    }, 550) //to avoid it showing the bottom of the webpage before scrollingIntoView 
    regularSamples.scrollIntoView(true, {behavior: 'smooth'})
    showButton.textContent = '+ Show more'
  }
})