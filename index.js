const documentBody = document.querySelector('body')
const popup = document.querySelector('.popup')
const showPopup = document.querySelector('#showProjects')
const close = document.querySelector('#closeButton')

documentBody.addEventListener('click', (e) => {
  e.stopPropagation()
  if(e.target === showPopup) {
    popup.style.display = 'flex'
  }
  if(e.target === popup || e.target === close){
    popup.style.display = 'none'
  }
})