!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){(function(t){"use strict";n(7),n(2),"production"!==t.env.NODE_ENV&&n(11)}).call(e,n(10))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t){var e=t.target.innerText,n=t.target.dataset.description,r=j(t.target.dataset.description);m.value=e,y.innerHTML=n,b.href="https://emojipedia.org/"+r,window.history.pushState("","","?emoji="+encodeURIComponent(r))}function a(t){var e=this.value.toLowerCase();window.history.pushState("","","?s="+encodeURIComponent(e));var n=E(e,l);w(n)}var s=n(4),c=r(s);n(14);var u="https://unpkg.com/emoji.json@5.0.0/emoji.json",l=[],f=document.querySelector(".search"),h=document.querySelector(".search-form"),d=document.querySelector(".loader"),p=document.querySelector(".emoji-suggestions"),m=(document.querySelector(".emoji-container"),document.querySelector(".emoji-result-emoji")),y=(document.querySelector(".emoji-result-clipboard"),document.querySelector(".emoji-result-description")),b=document.querySelector(".button-emojipedia"),g=document.querySelector(".button-copy"),v=function(){var t=document.createElement("a");t.href=window.location.href,fetch(u).then(function(t){return t.json()}).then(function(t){return l.push.apply(l,o(t))}).then(function(t){return w(l)}).then(function(t){return S()}).catch(function(t){})},w=function(t){var e=t.map(function(t){var e=t.char,n=t.name;return'\n\t\t\t<li id="'+j(T(n))+'" data-description="'+T(n)+'" data-slug="'+j(T(n))+'" aria-label="'+T(n)+'" title="'+T(n)+'">\n\t\t\t\t'+T(e)+"\n\t\t\t</li>\n\t\t\t"}).join("");p.innerHTML=e,d.classList.add("loaded")},E=function(t,e){return e.filter(function(e){return e.name.includes(t)})},T=function(t){return t.replace("⊛ ","")},j=function(t){if("string"==typeof t)return t.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")},S=function(){setTimeout(function(){var t=document.createElement("a");if(t.href=window.location.href,t.href.includes("?emoji=")){var e=decodeURIComponent(t.href.substring(t.href.indexOf("?emoji=")+7)),n=document.querySelector("[data-slug='"+e+"']").innerHTML;m.value=n.trim(),y.innerHTML=e,b.href="https://emojipedia.org/"+j(e),document.getElementById(""+e).scrollIntoView(),document.getElementById(""+e).classList.add("active"),setTimeout(function(){document.getElementById(""+e).classList.remove("active")},600)}},600)},x=function(){var t=new c.default(".button-copy");t.on("success",function(t){var e=t.text.replace("⊛ ","");g.innerHTML="Copied "+e+" to clipboard",g.classList.add("is-success"),setTimeout(function(){g.innerHTML="Copy Emoji to clipboard",g.classList.remove("is-success")},1500),t.clearSelection()})};f.addEventListener("keyup",a),h.addEventListener("submit",function(t){return t.preventDefault()}),p.addEventListener("click",i),x(),v()},function(t,e,n){var r,o,i;!function(a,s){o=[t,n(12)],r=s,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(){function t(e){r(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},function(t,e,n){var r,o,i;!function(a,s){o=[t,n(3),n(13),n(9)],r=s,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var u=o(e),l=o(n),f=o(r),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=function(t){function e(t,n){i(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return s(e,t),d(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(l.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==r;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var r=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=n},function(t,e,n){function r(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}var i=n(5);t.exports=r},function(t,e){},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return i(t,e,n);if(s.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return c(document.body,t,e,n)}var s=n(8),c=n(6);t.exports=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){m&&d&&(m=!1,d.length?p=d.concat(p):y=-1,p.length&&s())}function s(){if(!m){var t=o(a);m=!0;for(var e=p.length;e;){for(d=p,p=[];++y<e;)d&&d[y].run();y=-1,e=p.length}d=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var d,p=[],m=!1,y=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||m||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.prependListener=u,h.prependOnceListener=u,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){t.exports='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<title>Emoji fun</title>\n\t<meta charset="utf-8">\n\t<meta name="description" content="Emoji Search">\n\t<meta name="author" content="Urban Sanden">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\n\t<meta name="apple-mobile-web-app-capable" content="yes">\n\t<meta name="mobile-web-app-capable" content="yes">\n\n\t<link rel="icon" type="image/png" href="favicon.png" sizes="32x32">\n\t<link rel="apple-touch-icon" href="favicon.png">\n\n\t<meta itemprop="name" content="Emoji fun 😺">\n\t<meta itemprop="description" content="Simple emoji search">\n\t<meta itemprop="image" content="https://github.global.ssl.fastly.net/images/icons/emoji/cat.png?v5g">\n\n\t<meta property="og:url" content="https://urre.github.io/emojifun/">\n\t<meta property="og:type" content="website">\n\t<meta property="og:image" content="https://github.global.ssl.fastly.net/images/icons/emoji/cat.png?v5">\n\n\t<meta property="og:site_name" content="Emoji fun 😺">\n\t<meta property="og:locale" content="en_US">\n\t<meta property="article:author" content="Urban Sanden">\n\n\t<meta property="og:image" content="https://github.global.ssl.fastly.net/images/icons/emoji/cat.png?v5">\n\t<meta property="og:title" content="Emoji fun 😺">\n\t<meta property="og:url" content="https://urre.github.io/emojifun/">\n\t<meta property="og:description" content="Simple emoji search">\n\n\t<meta name="twitter:card" content="summary">\n\t<meta name="twitter:site" content="@urre">\n\t<meta name="twitter:creator" content="@urre">\n\t<meta name="twitter:url" content="https://urre.github.io/emojifun/">\n\t<meta name="twitter:title" content="Emoji fun 😺">\n\t<meta name="twitter:description" content="Simple emoji search">\n\t<meta name="twitter:image" content="https://github.global.ssl.fastly.net/images/icons/emoji/cat.png?v5">\n\n\t<script async defer src="https://buttons.github.io/buttons.js"></script>\n</head>\n\n<body>\n\n\t<main class="app" role="main">\n\n\t\t<aside class="sidebar" role="contentinfo">\n\t\t\t<a href="/">\n\t\t\t\t<h1>😺 Emoji Fun</h1>\n\t\t\t</a>\n\t\t</aside>\n\n\t\t<main class="view">\n\n\t\t\t<div class="view-search">\n\t\t\t\t<form class="search-form">\n\t\t\t\t\t<div class="search-form-wrapper">\n\t\t\t\t\t\t<input type="search" class="search" placeholder="Search 1283 emojis: woman, hands, cat..." autofocus>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t\t<div class="emoji-container">\n\t\t\t\t\t<div class="loader"></div>\n\t\t\t\t\t<ul class="emoji-suggestions" aria-labelledby="emoji">\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="view-body">\n\t\t\t\t<div class="emoji-result">\n\t\t\t\t\t<input class="emoji-result-emoji" id="clip" value="😀">\n\t\t\t\t\t<h2 class="emoji-result-description">grinning face</h2>\n\t\t\t\t\t<div class="emoji-actions">\n\t\t\t\t\t\t<button class="button button-copy" data-clipboard-target="#clip">Copy Emoji to clipboard</button>\n\t\t\t\t\t\t<a class="button button-emojipedia" href="http://emojipedia.org/grinning-face">Explore on Emojipedia</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<footer class="footer" role="contentinfo">\n\t\t\t\t\t\t<p class="footer-copy">A project by <a href="https://urre.me">Urban Sanden</a></p>\n\t\t\t\t\t\t<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=😀+Emoji+fun">Tweet</a>\n\t\t\t\t\t\t<a class="github-button" href="https://github.com/urre/emojifun" aria-label="Star urre/emojifun on GitHub">Star</a>\n\t\t\t\t\t</footer>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</main>\n\n\t</main>\n\n\t<script>\n\t\twindow.twttr = (function (d, s, id) {\n\t\t\tvar js, fjs = d.getElementsByTagName(s)[0],\n\t\t\t\tt = window.twttr || {};\n\t\t\tif (d.getElementById(id)) return t;\n\t\t\tjs = d.createElement(s);\n\t\t\tjs.id = id;\n\t\t\tjs.src = "https://platform.twitter.com/widgets.js";\n\t\t\tfjs.parentNode.insertBefore(js, fjs);\n\n\t\t\tt._e = [];\n\t\t\tt.ready = function (f) {\n\t\t\t\tt._e.push(f);\n\t\t\t};\n\n\t\t\treturn t;\n\t\t}(document, "script", "twitter-wjs"));\n\t</script>\n\n\n\t<script async src="https://www.googletagmanager.com/gtag/js?id=UA-5407647-74"></script>\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() { dataLayer.push(arguments) };\n\t\tgtag(\'js\', new Date());\n\n\t\tgtag(\'config\', \'UA-5407647-74\');\n\t</script>\n\n</body>\n\n</html>\n'},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function a(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader,n=a(e);return e.readAsArrayBuffer(t),n}function c(t){var e=new FileReader,n=a(e);return e.readAsText(t),n}function u(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&v(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!w(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return E.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var n=e.body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function y(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},w=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},f.call(d.prototype),f.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];y.redirect=function(t,e){if(T.indexOf(e)===-1)throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=d,t.Response=y,t.fetch=function(t,e){return new Promise(function(n,r){var o=new d(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new y(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);
//# sourceMappingURL=main.15b5b538c777a92a320a.js.map