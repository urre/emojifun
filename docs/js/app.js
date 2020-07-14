/* Quick and simple. Yep, it's not even minified lol :) */

const emojiJSON = "https://unpkg.com/emoji.json@12.1.1/emoji.json";
const emojis = [];
const searchInput = document.querySelector(".search");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector(".loader");
const copyButton = document.querySelector(".button-copy");
const copyURLButton = document.querySelector(".button-copy-url");
const emojiSuggestions = document.querySelector(".emoji-suggestions");
const emojiContainer = document.querySelector(".emoji-container");
const emojiResult = document.querySelector(".emoji-result-emoji");
const emojiResultClipboard = document.querySelector(".emoji-result-clipboard");
const emojiResultDescription = document.querySelector(
  ".emoji-result-description"
);
const buttonEmojpedia = document.querySelector(".button-emojipedia");
const buttonUnicode = document.querySelector(".button-unicode");
const buttonCopy = document.querySelector(".button-copy");

const getEmojis = () => {
  const parser = document.createElement("a");
  parser.href = window.location.href;

  fetch(emojiJSON)
    .then((blob) => blob.json())
    .then((data) => emojis.push(...data))
    .then((data) => renderResult(emojis))
    .then((data) => focusFirst())
    .then((data) => getQuery())
    .catch((err) => {});
};

const renderResult = (arr) => {
  const html = arr
    .map((emojiSymbol) => {
      const { char, name, codes } = emojiSymbol;
      return `
			<li tabindex="0" id="${slugify(cleanup(name))}" data-description="${cleanup(
        name
      )}" data-code="${slugify(cleanup(codes))}" data-slug="${slugify(
        cleanup(name)
      )}" aria-label="${cleanup(name)}" title="${cleanup(name)}">
				${cleanup(char)}
			</li>
			`;
    })
    .join("");

  emojiSuggestions.innerHTML = html;
  loader.classList.add("loaded");
};

const focusFirst = () => {
  emojiSuggestions.querySelector("li").focus();
};

const findEmoji = (wordToMatch, emojis) => {
  return emojis.filter((emoji) => emoji.name.includes(wordToMatch));
};

const cleanup = (text) => {
  return text.replace("⊛ ", "");
};

const slugify = (text) => {
  if ("string" !== typeof text) return;
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const renderEmoji = (e) => {
  var emoji = e.target.innerText;
  var description = e.target.dataset.description;
  var code = e.target.dataset.code;
  var slug = slugify(e.target.dataset.description);

  if (e.code === "ArrowRight") {
    emoji = e.target.nextElementSibling.innerText;
    description = e.target.nextElementSibling.dataset.description;
    slug = slugify(e.target.nextElementSibling.dataset.description);
    e.target.nextElementSibling.focus();
  } else if (e.code === "ArrowLeft") {
    emoji = e.target.previousElementSibling.innerText;
    description = e.target.previousElementSibling.dataset.description;
    slug = slugify(e.target.previousElementSibling.dataset.description);
    e.target.previousElementSibling.focus();
  } else if (e.code === "ArrowDown") {
    var currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    var nextEmoji = document.querySelectorAll(".emoji-suggestions li")[
      currentIndex + 9
    ];
    emoji = nextEmoji.innerText;
    description = nextEmoji.dataset.description;
    slug = slugify(nextEmoji.dataset.description);
    nextEmoji.focus();
  } else if (e.code === "ArrowUp") {
    var currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    var nextEmoji = document.querySelectorAll(".emoji-suggestions li")[
      currentIndex - 9
    ];
    emoji = nextEmoji.innerText;
    description = nextEmoji.dataset.description;
    slug = slugify(nextEmoji.dataset.description);
    nextEmoji.focus();
  }

  emojiResult.value = emoji;
  emojiResultDescription.innerHTML = description;
  buttonEmojpedia.href = `https://emojipedia.org/${slug}`;
  buttonUnicode.href = `https://unicode.org/emoji/charts/emoji-list.html#${code}`;
  window.history.pushState("", "", `?emoji=${encodeURIComponent(slug)}`);
};

const searchEmoji = (e) => {
  const searchPhrase = e.currentTarget.value.toLowerCase();
  window.history.pushState("", "", `?s=${encodeURIComponent(searchPhrase)}`);
  const matchInArray = findEmoji(searchPhrase, emojis);
  renderResult(matchInArray);
};

const getQuery = () => {
  setTimeout(() => {
    const parser = document.createElement("a");
    parser.href = window.location.href;

    if (parser.href.includes("?emoji=")) {
      let searchquery = decodeURIComponent(
        parser.href.substring(parser.href.indexOf("?emoji=") + 7)
      );

      const emojiname = document.querySelector(`[data-slug='${searchquery}']`)
        .innerHTML;

      emojiResult.value = emojiname.trim();

      emojiResultDescription.innerHTML = searchquery;
      buttonEmojpedia.href = `https://emojipedia.org/${slugify(searchquery)}`;
      document.getElementById(`${searchquery}`).scrollIntoView();
      document.getElementById(`${searchquery}`).classList.add("active");
      setTimeout(() => {
        document.getElementById(`${searchquery}`).classList.remove("active");
      }, 600);
    }
  }, 600);
};

const copyURL = () => {
  copyURLButton.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copyURLButton.classList.add("is-success");
      copyURLButton.innerText = `Copied URL`;

      setTimeout(function () {
        copyURLButton.innerText = "Copy URL";
        copyURLButton.classList.remove("is-success");
      }, 2000);
    });
  });
};

const initClipboard = () => {
  copyButton.addEventListener("click", (e) => {
    e.preventDefault();
    const toCopy = document.querySelector("#clip").value;

    navigator.clipboard.writeText(toCopy).then(
      function () {
        copyButton.blur();

        copyButton.classList.add("is-success");
        copyButton.innerText = `Copied ${toCopy}`;

        setTimeout(function () {
          copyButton.innerText = "Copy Emoji";
          copyButton.classList.remove("is-success");
        }, 2000);
      },
      function (error) {
        copyButton.innerText = "Error";
      }
    );
  });
};

searchInput.addEventListener("keyup", searchEmoji);
searchForm.addEventListener("submit", (e) => e.preventDefault());
emojiSuggestions.addEventListener("click", renderEmoji);
emojiSuggestions.addEventListener("keyup", renderEmoji);

initClipboard();
copyURL();
getEmojis();
