let giphyButton = document.querySelector('.giphButton')

giphyButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`api.giphy.com/v1/gifs/random`)
})
