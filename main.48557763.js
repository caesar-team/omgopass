parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"FQwt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generatePassword=void 0;const e=(e={})=>t({syllablesCount:3,minSyllableLength:2,maxSyllableLength:3,hasNumbers:!0,titlecased:!0,vowels:"aeiouy",consonants:"bcdfghklmnprstvz",...e});exports.generatePassword=e;const t=({syllablesCount:e,...t})=>l(e,()=>s(t)).join(""),s=({consonants:e,vowels:t,hasNumbers:s,titlecased:a,minSyllableLength:r,maxSyllableLength:c})=>{const u=o(r,c),h=l(u,s=>{const o=n(s%2?t:e);return 0===s&&a?o.toUpperCase():o}).join("");return s?h+o(0,9):h},n=e=>e.charAt(o(0,e.length-1)),o=(e,t)=>Math.round(Math.random()*(t-e)+e),l=(e,t)=>{const s=[];for(let n=0;n<e;n++)s.push(t(n));return s};
},{}],"HJD/":[function(require,module,exports) {
"use strict";require("./styles.css");var e=require("omgopass");document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("password")[0],n=document.getElementsByClassName("button")[0],s=document.getElementsByName("numbers")[0],a=document.getElementsByName("titlecase")[0],d=function(){t.innerHTML=(0,e.generatePassword)({hasNumbers:s.checked,titlecased:a.checked})};d(),n.addEventListener("click",d),s.addEventListener("change",d),a.addEventListener("change",d)});
},{"./styles.css":"D9Nj","omgopass":"FQwt"}]},{},["HJD/"], null)
//# sourceMappingURL=/omgopass/main.48557763.js.map