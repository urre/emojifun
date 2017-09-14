import Clipboard from 'clipboard'

const endpoint = `${window.location.href}/data/emojis.json`
const emojis = []
const searchInput = document.querySelector('.search')
const searchForm = document.querySelector('.search-form')
const loader = document.querySelector('.loader')
const emojiSuggestions = document.querySelector('.emoji-suggestions')
const emojiContainer = document.querySelector('.emoji-container')
const emojiResult = document.querySelector('.emoji-result-emoji')
const emojiResultClipboard = document.querySelector('.emoji-result-clipboard')
const emojiResultDescription = document.querySelector(
	'.emoji-result-description'
)
const buttonEmojpedia = document.querySelector('.button-emojipedia')
const buttonCopy = document.querySelector('.button-copy')

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => emojis.push(...data))
	.then(
		setTimeout(() => {
			renderResult(emojis)
			console.log(emojis);
		}, 100)
	)
	.catch(err => {})

const renderResult = arr => {
	const html = arr
		.map(emojiSymbol => {
			const { emoji, description } = emojiSymbol
			return `
			<li data-description="${description}">
				${emoji}
			</li>
			`
		})
		.join('')

	emojiSuggestions.innerHTML = html
	loader.classList.remove('loading')
}

const findEmoji = (wordToMatch, emojis) => {
	return emojis.filter(emoji =>
		emoji.aliases.some(alias => alias.includes(wordToMatch))
	)
}

const slugify = text => {
	if ('string' !== typeof text) return
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/&/g, '-and-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
}

function renderEmoji(e) {
	const emoj = e.target.innerText
	const description = e.target.dataset.description
	const slug = slugify(e.target.dataset.description)
	emojiResult.innerHTML = emoj
	emojiResultDescription.innerHTML = description
	emojiResultClipboard.value = emoj
	buttonEmojpedia.href = `https://emojipedia.org/${slug}`
}

function searchEmoji() {
	const matchInArray = findEmoji(this.value, emojis)
	renderResult(matchInArray)
}

const initClipboard = () => {
	const clipboard = new Clipboard('.button-copy')

	clipboard.on('success', function(e) {
		buttonCopy.innerHTML = `Copied ${e.text} to clipboard`
		buttonCopy.classList.add('is-success')

		setTimeout(() => {
			buttonCopy.innerHTML = `Copy Emoji to clipboard`
			buttonCopy.classList.remove('is-success')
		}, 1500)

		e.clearSelection()
	})
}

searchInput.addEventListener('change', searchEmoji)
searchInput.addEventListener('keyup', searchEmoji)
emojiSuggestions.addEventListener('click', renderEmoji)

initClipboard()
