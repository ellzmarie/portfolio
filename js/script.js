let giphButton = document.querySelector('.giphButton')

giphButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`api.giphy.com/v1/gifs/random`)
})
