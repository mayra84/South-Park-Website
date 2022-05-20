
fetch('/api/v1/characters')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderCharacters(data)
    })


const characterResults = document.querySelector('#character-results')

function renderCharacters(characters) {
    const charactersHtml = characters.map(character => {
        console.log(character.name)
        return `
        <div>${character.name}</div>`
    }).join('')
    characterResults.innerHTML = charactersHtml
}


fetch('/api/v1/episodes')
.then(res => res.json())
.then(data => {
    console.log(data)
    renderEpisodes(data)
})

const episodeResults = document.querySelector('#episode-results')
console.log(episodeResults)

function renderEpisodes(episodes) {
    const episodesHtml = episodes.map(episode => {
        console.log(episode.title)
        return `
        <div>${episode.title}</div>`
    }).join('')
    episodeResults.innerHtml = episodesHtml
}
