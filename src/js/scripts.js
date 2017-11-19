import Clipboard from 'clipboard'
import 'whatwg-fetch'

const endpoint = 'https://unpkg.com/emoji.json@5.0.0/emoji.json'
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

const getEmojis = () => {
	const parser = document.createElement('a')
	parser.href = window.location.href

	fetch(endpoint)
		.then(blob => blob.json())
		.then(data => emojis.push(...data))
		.then(
			setTimeout(() => {
				renderResult(emojis)
				if (parser.href.includes('=')) {
					const searchquery = decodeURIComponent(
						parser.href.substring(parser.href.indexOf('=') + 1)
					)
					searchInput.setAttribute('value', searchquery)
					const matchInArray = findEmoji(searchquery, emojis)
					renderResult(matchInArray)
				}
			}, 500)
		)
		.catch(err => {})
}

const renderResult = arr => {
	const html = arr
		.map(emojiSymbol => {
			const { char, name } = emojiSymbol
			return `
			<li data-description="${name}">
				${char}
			</li>
			`
		})
		.join('')

	emojiSuggestions.innerHTML = html
	loader.classList.remove('loading')
}

const findEmoji = (wordToMatch, emojis) => {
	return emojis.filter(emoji => emoji.name.includes(wordToMatch))
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
	emojiResult.value = emoj
	emojiResultDescription.innerHTML = description
	buttonEmojpedia.href = `https://emojipedia.org/${slug}`
}

function searchEmoji(e) {
	window.history.pushState('', '', `?s=${encodeURIComponent(this.value)}`)
	const matchInArray = findEmoji(this.value, emojis)
	renderResult(matchInArray)
}

const initClipboard = () => {
	var clipboard = new Clipboard('.button-copy')

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

searchInput.addEventListener('keyup', searchEmoji)
searchForm.addEventListener('submit', e => e.preventDefault())
emojiSuggestions.addEventListener('click', renderEmoji)

initClipboard()
getEmojis()
