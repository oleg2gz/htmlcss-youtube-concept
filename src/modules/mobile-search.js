const mobileSearch = () => {
  const mobileSearchGroup = document.querySelector('.input-group')
  let isOpen = false

  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-search')) {
      mobileSearchGroup.classList.add('is-open')
      isOpen = true
    } else if (!e.target.closest('.input-group') && isOpen) {
      mobileSearchGroup.classList.remove('is-open')
      isOpen = false
    }
  })
}

export default mobileSearch
