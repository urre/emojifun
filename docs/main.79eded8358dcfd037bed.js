!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){(function(t){"use strict";n(7),n(2),"production"!==t.env.NODE_ENV&&n(11)}).call(e,n(10))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t){var e=t.target.innerText,n=t.target.dataset.description,r=E(t.target.dataset.description);p.innerHTML=e,y.innerHTML=n,m.value=e,v.href="https://emojipedia.org/"+r}function a(){var t=w(this.value,l);b(t)}var c=n(4),s=r(c),u=window.location.href+"/data/emojis.json",l=[],f=document.querySelector(".search"),d=(document.querySelector(".search-form"),document.querySelector(".loader")),h=document.querySelector(".emoji-suggestions"),p=(document.querySelector(".emoji-container"),document.querySelector(".emoji-result-emoji")),m=document.querySelector(".emoji-result-clipboard"),y=document.querySelector(".emoji-result-description"),v=document.querySelector(".button-emojipedia"),g=document.querySelector(".button-copy");fetch(u).then(function(t){return t.json()}).then(function(t){return l.push.apply(l,o(t))}).then(setTimeout(function(){b(l),console.log(l)},100)).catch(function(t){});var b=function(t){var e=t.map(function(t){var e=t.emoji,n=t.description;return'\n\t\t\t<li data-description="'+n+'">\n\t\t\t\t'+e+"\n\t\t\t</li>\n\t\t\t"}).join("");h.innerHTML=e,d.classList.remove("loading")},w=function(t,e){return e.filter(function(e){return e.aliases.some(function(e){return e.includes(t)})})},E=function(t){if("string"==typeof t)return t.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")},k=function(){var t=new s.default(".button-copy");t.on("success",function(t){g.innerHTML="Copied "+t.text+" to clipboard",g.classList.add("is-success"),setTimeout(function(){g.innerHTML="Copy Emoji to clipboard",g.classList.remove("is-success")},1500),t.clearSelection()})};f.addEventListener("change",a),f.addEventListener("keyup",a),h.addEventListener("click",i),k()},function(t,e,n){var r,o,i;!function(a,c){o=[t,n(12)],r=c,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){r(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})},function(t,e,n){var r,o,i;!function(a,c){o=[t,n(3),n(13),n(9)],r=c,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var u=o(e),l=o(n),f=o(r),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=function(t){function e(t,n){i(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(l.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==r;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var r=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=n},function(t,e,n){function r(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}var i=n(5);t.exports=r},function(t,e){},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return o(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=n(8),s=n(6);t.exports=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){m&&h&&(m=!1,h.length?p=h.concat(p):y=-1,p.length&&c())}function c(){if(!m){var t=o(a);m=!0;for(var e=p.length;e;){for(h=p,p=[];++y<e;)h&&h[y].run();y=-1,e=p.length}h=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var h,p=[],m=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new s(t,e)),1!==p.length||m||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){t.exports='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<title>🙋‍♂ Emoji fun</title>\n\t<meta charset="utf-8">\n\t<meta name="description" content="Emoji Search">\n\t<meta name="author" content="Urban Sanden">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t<meta property="og:image" content="https://github.global.ssl.fastly.net/images/icons/emoji/+1.png?v5">\n\t<meta property="og:title" content="Emoji fun 😺♂">\n\t<meta property="og:url" content="">\n\t<meta property="og:description" content="Emoji search">\n\t<meta name="apple-mobile-web-app-capable" content="yes">\n\t<meta name="mobile-web-app-capable" content="yes">\n\n</head>\n\n<body>\n\n\t<main class="app">\n\n\t\t<aside class="sidebar">\n\t\t\t<a href="/">\n\t\t\t\t<h1>😺 Emoji Fun</h1>\n\t\t\t</a>\n\t\t</aside>\n\n\t\t<main class="view">\n\n\t\t\t<div class="view-search">\n\t\t\t\t<form class="search-form">\n\t\t\t\t\t<div class="search-form-wrapper">\n\t\t\t\t\t\t<input type="search" class="search" placeholder="Search emoji. Ex: hand, cat, love..." autofocus>\n\t\t\t\t\t\t<div class="loader loading"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t\t<div class="emoji-container">\n\t\t\t\t\t<ul class="emoji-suggestions">\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="view-body">\n\t\t\t\t<div class="emoji-result">\n\t\t\t\t\t<input class="emoji-result-clipboard" id="toclipboard" value="😁">\n\t\t\t\t\t<h1 class="emoji-result-emoji">😁</h1>\n\t\t\t\t\t<h2 class="emoji-result-description">grinning face</h2>\n\t\t\t\t\t<div class="emoji-actions">\n\t\t\t\t\t\t<a class="button button-copy" data-clipboard-target="#toclipboard">Copy Emoji to clipboard</a>\n\t\t\t\t\t\t<a class="button button-emojipedia" href="http://emojipedia.org/grinning-face">Explore on Emojipedia</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<footer class="footer" role="contentinfo">\n\t\t\t\t\t\t<p class="footer-copy">Made by <a href="https://urre.me">Urban Sanden</a></p>\n\t\t\t\t\t\t<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=😁+Emoji+fun">Tweet</a>\n\t\t\t\t\t</footer>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</main>\n\n\t</main>\n\n\t<script>\n\t\twindow.twttr = (function (d, s, id) {\n\t\t\tvar js, fjs = d.getElementsByTagName(s)[0],\n\t\t\t\tt = window.twttr || {};\n\t\t\tif (d.getElementById(id)) return t;\n\t\t\tjs = d.createElement(s);\n\t\t\tjs.id = id;\n\t\t\tjs.src = "https://platform.twitter.com/widgets.js";\n\t\t\tfjs.parentNode.insertBefore(js, fjs);\n\n\t\t\tt._e = [];\n\t\t\tt.ready = function (f) {\n\t\t\t\tt._e.push(f);\n\t\t\t};\n\n\t\t\treturn t;\n\t\t}(document, "script", "twitter-wjs"));\n\t</script>\n\n</body>\n\n</html>\n'},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n}]);
//# sourceMappingURL=main.79eded8358dcfd037bed.js.map