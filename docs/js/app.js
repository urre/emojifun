/* Quick and simple :) */

const emojiJSON = "https://unpkg.com/emoji.json@13.0.0/emoji.json";
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
    .then((data) => getQuery());
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

const pickEmoji = (e) => {
  renderEmoji(e.target);
};

const renderEmoji = (emoji) => {
  emojiResult.value = emoji.innerText;
  emojiResultDescription.innerHTML = emoji.dataset.description;
  buttonEmojpedia.href = `https://emojipedia.org/${slugify(
    emoji.dataset.description
  )}`;
  buttonUnicode.href = `https://unicode.org/emoji/charts/emoji-list.html#${emoji.dataset.code}`;
  window.history.pushState(
    "",
    "",
    `?emoji=${encodeURIComponent(slugify(emoji.dataset.description))}`
  );
  emoji.focus();
};

const arrowKeys = (e) => {
  const emoji = e.target;

  switch (e.code) {
    case "ArrowRight":
      renderEmoji(emoji.nextElementSibling);
      break;
    case "ArrowLeft":
      renderEmoji(emoji.previousElementSibling);
      break;
    case "ArrowDown":
      var currentIndex = [...e.target.parentNode.children].indexOf(e.target);
      var nextEmoji = document.querySelectorAll(".emoji-suggestions li")[
        currentIndex + 9
      ];
      renderEmoji(nextEmoji);
      break;
    case "ArrowUp":
      var currentIndex = [...e.target.parentNode.children].indexOf(e.target);
      var nextEmoji = document.querySelectorAll(".emoji-suggestions li")[
        currentIndex - 9
      ];
      renderEmoji(nextEmoji);
      break;
  }
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

const copyEmoji = () => {
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

const clearSearch = (e) => {
  if (e.target.type === "search") {
    searchForm.value = "";
    const matchInArray = findEmoji("", emojis);
    renderResult(matchInArray);
    var uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, clean_uri);
    }
  }
};

document.addEventListener("click", clearSearch);
searchInput.addEventListener("keyup", searchEmoji);
searchForm.addEventListener("submit", (e) => e.preventDefault());
emojiSuggestions.addEventListener("click", pickEmoji);
emojiSuggestions.addEventListener("keyup", arrowKeys);

getEmojis();
copyEmoji();
copyURL();
