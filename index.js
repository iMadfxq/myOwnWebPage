const documentBody = document.querySelector('body')
const showButton = document.querySelector('#samples--display')
const hiddenSamples = document.querySelector('#samples--hidden')

documentBody.addEventListener('click', (e) => {
  e.stopPropagation()
  if(e.target === showButton && hiddenSamples.style.display == 'none') {
    hiddenSamples.style.display = 'flex'
    hiddenSamples.scrollIntoView(true, {behavior: 'smooth'})
    showButton.textContent = '- Show less'
  } else if(e.target === showButton && hiddenSamples.style.display == 'flex'){
    document.querySelector('.samples').scrollIntoView(true, {behavior: 'smooth'})
    hiddenSamples.style.display = 'none'
    showButton.textContent = '+ Show more'

  }
})