"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[314],{314:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(168),o=t(511),a=t(184),s=function(){var e=(0,r.$)().t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{id:"music",style:{marginBottom:0},children:e("Music")}),(0,a.jsx)("ul",{className:"music-area",children:["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368671695","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455028900","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/420930108","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1355510512","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1301526613","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1006273291","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150459813","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173644457"].map((function(e){return(0,a.jsx)("li",{className:"project",children:(0,a.jsx)(o.B,{embed:{url:e,type:"soundcloud"}})})}))})]})}},511:function(e,n,t){t.d(n,{B:function(){return o}});var r=t(184),o=function(e){var n=e.embed;switch(n.type){case"image":return(0,r.jsx)("img",{className:"embed",src:n.url,alt:n.altText});case"youtube":return(0,r.jsx)("p",{className:"embed",children:"video here"});case"shadertoy":return(0,r.jsx)("iframe",{className:"embed shadertoy",width:"100%",height:"100%",style:{marginBottom:"20%"},frameBorder:"0",src:"".concat(n.url).concat(n.url.includes("?")?"&":"?","gui=true&paused=true&muted=false"),allowFullScreen:!0});case"soundcloud":return(0,r.jsx)("iframe",{className:"embed soundcloud",width:"100%",scrolling:"no",frameBorder:"no",src:"".concat(n.url,"&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")});default:return(0,r.jsx)(r.Fragment,{})}}},168:function(e,n,t){t.d(n,{$:function(){return m}});var r=t(439),o=t(942),a=t(791),s=t(589);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),u.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!s(r,e)||o&&!s(a,e))))}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return i("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):d(e,n,t)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,o=(0,a.useContext)(s.OO)||{},u=o.i18n,c=o.defaultNS,d=t||u||(0,s.nI)();if(d&&!d.reportNamespaces&&(d.reportNamespaces=new s.zv),!d){i("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},m=[p,{},!1];return m.t=p,m.i18n={},m.ready=!1,m}d.options.react&&void 0!==d.options.react.wait&&i("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=g(g(g({},(0,s.JP)()),d.options.react),n),v=y.useSuspense,b=y.keyPrefix,w=e||c||d.options&&d.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],d.reportNamespaces.addUsedNamespaces&&d.reportNamespaces.addUsedNamespaces(w);var k=(d.isInitialized||d.initializedStoreOnce)&&w.every((function(e){return f(e,d,y)}));function j(){return d.getFixedT(null,"fallback"===y.nsMode?w:w[0],b)}var O=(0,a.useState)(j),x=(0,r.Z)(O,2),N=x[0],C=x[1],A=w.join(),S=h(A),I=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=y.bindI18n,n=y.bindI18nStore;function t(){I.current&&C(j)}return I.current=!0,k||v||l(d,w,(function(){I.current&&C(j)})),k&&S&&S!==A&&I.current&&C(j),e&&d&&d.on(e,t),n&&d&&d.store.on(n,t),function(){I.current=!1,e&&d&&e.split(" ").forEach((function(e){return d.off(e,t)})),n&&d&&n.split(" ").forEach((function(e){return d.store.off(e,t)}))}}),[d,A]);var P=(0,a.useRef)(!0);(0,a.useEffect)((function(){I.current&&!P.current&&C(j),P.current=!1}),[d,b]);var B=[N,d,k];if(B.t=N,B.i18n=d,B.ready=k,k)return B;if(!k&&!v)return B;throw new Promise((function(e){l(d,w,(function(){e()}))}))}}}]);
//# sourceMappingURL=314.779a47f2.chunk.js.map