!function(e){function t(t){for(var r,o,l=t[0],u=t[1],s=t[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(_&&_(t);d.length;)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var _=u;a.push([22,1]),n()}([,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(46);Object.defineProperty(t,"Pagination",{enumerable:!0,get:function(){return r.Pagination}});var i=n(51);Object.defineProperty(t,"Search",{enumerable:!0,get:function(){return i.Search}});var a=n(63);Object.defineProperty(t,"Loader",{enumerable:!0,get:function(){return a.Loader}})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38);Object.defineProperty(t,"FilmsGrid",{enumerable:!0,get:function(){return r.FilmsGrid}});var i=n(68);Object.defineProperty(t,"FilmDetails",{enumerable:!0,get:function(){return i.FilmDetails}});var a=n(72);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return a.Header}});var o=n(76);Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return o.Footer}})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67);Object.defineProperty(t,"MainRouter",{enumerable:!0,get:function(){return r.MainRouter}});var i=n(19);Object.defineProperty(t,"MAIN_PATH",{enumerable:!0,get:function(){return i.MAIN_PATH}}),Object.defineProperty(t,"SEARCH_PATH",{enumerable:!0,get:function(){return i.SEARCH_PATH}}),Object.defineProperty(t,"FILM_PATH",{enumerable:!0,get:function(){return i.FILM_PATH}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(82);Object.defineProperty(t,"ErrorLayout",{enumerable:!0,get:function(){return r.ErrorLayout}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(85);Object.defineProperty(t,"useRequestFilms",{enumerable:!0,get:function(){return r.useRequestFilms}}),Object.defineProperty(t,"useRequest",{enumerable:!0,get:function(){return r.useRequest}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(86);Object.defineProperty(t,"requestTopFilms",{enumerable:!0,get:function(){return r.requestTopFilms}}),Object.defineProperty(t,"requestSearchFilms",{enumerable:!0,get:function(){return r.requestSearchFilms}}),Object.defineProperty(t,"requestFilm",{enumerable:!0,get:function(){return r.requestFilm}})},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);Object.defineProperty(t,"MainLayout",{enumerable:!0,get:function(){return r.MainLayout}}),Object.defineProperty(t,"TopFilmsLayout",{enumerable:!0,get:function(){return r.TopFilmsLayout}}),Object.defineProperty(t,"FilmLayout",{enumerable:!0,get:function(){return r.FilmLayout}}),Object.defineProperty(t,"SearchFilmsLayout",{enumerable:!0,get:function(){return r.SearchFilmsLayout}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FILM_PATH=t.SEARCH_PATH=t.MAIN_PATH=void 0,t.MAIN_PATH="/",t.SEARCH_PATH="/search/",t.FILM_PATH="/film/"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ORIGINAL_SIZE_POSTER_BASE_URL=t.SMALL_POSTER_BASE_URL=t.POSTER_BASE_URL=t.BASE_URL=t.LANGUAGE_QUERY=t.AUTH_QUERY=t.AUTH_QUERY_KEY=t.API_KEY=void 0,t.API_KEY="eb8325dc8ec709fa36eda2c74829e3e7",t.AUTH_QUERY_KEY="api_key",t.AUTH_QUERY=t.AUTH_QUERY_KEY+"="+t.API_KEY,t.LANGUAGE_QUERY="language=ru-RU",t.BASE_URL="https://api.themoviedb.org/3/",t.POSTER_BASE_URL="https://image.tmdb.org/t/p/",t.SMALL_POSTER_BASE_URL=t.POSTER_BASE_URL+"w200",t.ORIGINAL_SIZE_POSTER_BASE_URL=t.POSTER_BASE_URL+"original"},,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0)),a=r(n(24)),o=n(28);a.default.render(i.default.createElement(o.App,null),document.getElementById("main"))},,,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var i=r(n(0)),a=n(4),o=n(18),l=n(9);n(92),t.App=function(){return i.default.createElement(a.BrowserRouter,null,i.default.createElement(o.MainLayout,null,i.default.createElement(l.MainRouter,null)))}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(34);Object.defineProperty(t,"MainLayout",{enumerable:!0,get:function(){return r.MainLayout}});var i=n(80);Object.defineProperty(t,"TopFilmsLayout",{enumerable:!0,get:function(){return i.TopFilmsLayout}});var a=n(88);Object.defineProperty(t,"FilmLayout",{enumerable:!0,get:function(){return a.FilmLayout}});var o=n(90);Object.defineProperty(t,"SearchFilmsLayout",{enumerable:!0,get:function(){return o.SearchFilmsLayout}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35);Object.defineProperty(t,"MainLayout",{enumerable:!0,get:function(){return r.MainLayout}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainLayout=void 0;var i=r(n(0)),a=r(n(36)),o=n(7);t.MainLayout=function(e){var t=e.children;return i.default.createElement("div",{className:a.default["main-layout"]},i.default.createElement(o.Header,null),i.default.createElement("div",{className:a.default["main-layout__content"]},t),i.default.createElement(o.Footer,null))}},function(e,t,n){var r=n(2),i=n(37);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".main-layout___3Dbhk{width:100%;height:100%}.main-layout__content___Ev814{max-width:1280px;background-color:#fff;padding:10px;margin:0 auto;position:relative;box-sizing:border-box;min-height:calc(100% - 60px - 50px)}",""]),t.locals={"main-layout":"main-layout___3Dbhk","main-layout__content":"main-layout__content___Ev814"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(39);Object.defineProperty(t,"FilmsGrid",{enumerable:!0,get:function(){return r.FilmsGrid}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FilmsGrid=void 0;var i=r(n(0)),a=n(4),o=r(n(40)),l=n(42),u=n(5),s=n(9);t.FilmsGrid=function(e){var t=e.films,n=e.totalPages,r=e.page,_=e.handlePageChange;return i.default.createElement("div",{className:o.default["films-grid"]},i.default.createElement("div",{className:o.default["films-grid__content"]},t.map((function(e){var t=e.id,n=e.title,r=e.posterUrl;return i.default.createElement(a.Link,{to:s.FILM_PATH+t,className:o.default["films-grid__element"],key:t},i.default.createElement(l.FilmPreview,{id:t,title:n,posterUrl:r}))}))),n>1&&i.default.createElement("div",{className:o.default["films-grid__pagination"]},i.default.createElement(u.Pagination,{totalPages:n,page:r,handlePageChange:_})))}},function(e,t,n){var r=n(2),i=n(41);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".films-grid___1J9Fe{padding-bottom:10px}.films-grid__content___1XjYH{display:grid;grid-template-columns:repeat(auto-fill, 200px);grid-gap:20px;justify-content:space-around}.films-grid__pagination___3dVIr{margin-top:30px}",""]),t.locals={"films-grid":"films-grid___1J9Fe","films-grid__content":"films-grid__content___1XjYH","films-grid__pagination":"films-grid__pagination___3dVIr"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43);Object.defineProperty(t,"FilmPreview",{enumerable:!0,get:function(){return r.FilmPreview}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FilmPreview=void 0;var i=r(n(0)),a=r(n(44));t.FilmPreview=function(e){e.id;var t=e.title,n=e.posterUrl;return i.default.createElement("div",{className:a.default["film-preview"]},i.default.createElement("img",{className:a.default["film-preview__img"],src:n,alt:t}),i.default.createElement("div",{title:t,className:a.default["film-preview__title"]},t))}},function(e,t,n){var r=n(2),i=n(45);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".film-preview___2YzFz{width:200px}.film-preview__img___UjubC{display:block;width:200px;height:300px;box-shadow:0 11px 10px -10px rgba(0,0,0,.5)}.film-preview__title___YG30Q{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:10px;color:#1d1d1f}",""]),t.locals={"film-preview":"film-preview___2YzFz","film-preview__img":"film-preview__img___UjubC","film-preview__title":"film-preview__title___YG30Q"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47);Object.defineProperty(t,"Pagination",{enumerable:!0,get:function(){return r.Pagination}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;var i=r(n(0)),a=r(n(48)),o=r(n(49));t.Pagination=function(e){var t=e.totalPages,n=e.page,r=e.handlePageChange;return i.default.createElement(a.default,{previousLabel:"➤",nextLabel:"➤",breakLabel:"...",pageCount:t,forcePage:n-1,marginPagesDisplayed:1,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;return r(t+1)},containerClassName:o.default.pagination,pageLinkClassName:o.default.pagination__element,activeLinkClassName:o.default["pagination__element--active"],disabledClassName:o.default["pagination__element--disabled"],breakClassName:o.default.pagination__break,previousLinkClassName:o.default.pagination__prev,nextLinkClassName:o.default.pagination__next})}},,function(e,t,n){var r=n(2),i=n(50);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".pagination___3e3w2{list-style-type:none;display:flex;justify-content:center;padding:0;color:#313132}.pagination__element___2CmCK,.pagination__prev___ouQ6D,.pagination__next___pWxyo{cursor:pointer;display:inline-block;font-size:17px;text-align:center;line-height:34px;width:34px;height:34px;border:1px solid #313132;border-radius:50%;margin-left:10px}@media(max-width: 667px){.pagination__element___2CmCK,.pagination__prev___ouQ6D,.pagination__next___pWxyo{font-size:12px;line-height:24px;width:24px;height:24px;margin-left:8px}}.pagination__element--active___-Vu-M,.pagination__element___2CmCK:hover,.pagination__prev___ouQ6D:hover,.pagination__next___pWxyo:hover{background-color:#313132;color:#fff}.pagination__prev___ouQ6D,.pagination__next___pWxyo{width:31px;padding-left:3px}@media(max-width: 667px){.pagination__prev___ouQ6D,.pagination__next___pWxyo{width:22px;padding-left:2px;height:24px}}.pagination__element--disabled___34bPJ{pointer-events:none}.pagination__prev___ouQ6D{transform:rotate(180deg);margin-left:0}.pagination__break___2urs7{font-size:24px;margin-left:10px;pointer-events:none}@media(max-width: 667px){.pagination__break___2urs7{font-size:18px;margin-left:8px}}",""]),t.locals={pagination:"pagination___3e3w2",pagination__element:"pagination__element___2CmCK",pagination__prev:"pagination__prev___ouQ6D",pagination__next:"pagination__next___pWxyo","pagination__element--active":"pagination__element--active___-Vu-M","pagination__element--disabled":"pagination__element--disabled___34bPJ",pagination__break:"pagination__break___2urs7"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52);Object.defineProperty(t,"Search",{enumerable:!0,get:function(){return r.Search}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var o=a(n(0)),l=n(53),u=n(57);t.Search=function(e){var t=e.handleSearch,n=o.useState(""),r=n[0],i=n[1];return o.default.createElement("div",null,o.default.createElement(u.SearchButton,{disabled:!r,handleClick:function(){return t(r)}}),o.default.createElement(l.Input,{value:r,placeholder:"Поиск",handleChange:i}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54);Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return r.Input}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var i=r(n(0)),a=r(n(55));t.Input=function(e){var t=e.handleChange,n=e.placeholder,r=e.value;return i.default.createElement("input",{type:"text",className:a.default.input,value:r,placeholder:n,onChange:function(e){return t(e.target.value)}})}},function(e,t,n){var r=n(2),i=n(56);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".input___15NhE{background:transparent;font-size:18px;height:30px;color:#fff;box-sizing:border-box;width:250px}@media(max-width: 667px){.input___15NhE{width:150px}}",""]),t.locals={input:"input___15NhE"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58);Object.defineProperty(t,"SearchButton",{enumerable:!0,get:function(){return r.SearchButton}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchButton=void 0;var i=r(n(0)),a=r(n(59)),o=n(61);t.SearchButton=function(e){var t=e.disabled,n=e.handleClick;return i.default.createElement("button",{className:a.default["search-button"],disabled:t,onClick:n},i.default.createElement(o.SearchIcon,null))}},function(e,t,n){var r=n(2),i=n(60);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".search-button___1LYGJ{color:#86868b;opacity:.8;width:30px;height:30px;background:transparent;padding:0;font-size:18px;margin-right:2px;cursor:pointer}.search-button___1LYGJ:hover{opacity:1}.search-button___1LYGJ:disabled{pointer-events:none}",""]),t.locals={"search-button":"search-button___1LYGJ"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62);Object.defineProperty(t,"SearchIcon",{enumerable:!0,get:function(){return r.SearchIcon}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchIcon=void 0;var i=r(n(0));t.SearchIcon=function(){return i.default.createElement("i",{className:"fa fa-search"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(64);Object.defineProperty(t,"Loader",{enumerable:!0,get:function(){return r.Loader}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=void 0;var i=r(n(0)),a=r(n(65));t.Loader=function(){return i.default.createElement("div",{className:a.default.loader})}},function(e,t,n){var r=n(2),i=n(66);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,'.loader___11FT3{display:flex;align-items:center;justify-content:center;position:absolute;pointer-events:none;top:0;left:0;bottom:0;right:0;background-color:rgba(255,255,255,.7);z-index:2}.loader___11FT3:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #313132;border-color:#313132 transparent #313132 transparent;animation:loader-spin___q4G8s 1.2s linear infinite}@keyframes loader-spin___q4G8s{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]),t.locals={loader:"loader___11FT3","loader-spin":"loader-spin___q4G8s"},e.exports=t},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainRouter=void 0;var i=r(n(0)),a=n(4),o=n(19),l=n(18);t.MainRouter=function(){return i.default.createElement(a.Switch,null,i.default.createElement(a.Route,{path:o.SEARCH_PATH+":query"},i.default.createElement(l.SearchFilmsLayout,null)),i.default.createElement(a.Route,{path:o.FILM_PATH+":filmId"},i.default.createElement(l.FilmLayout,null)),i.default.createElement(a.Route,{path:o.MAIN_PATH},i.default.createElement(l.TopFilmsLayout,null)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(69);Object.defineProperty(t,"FilmDetails",{enumerable:!0,get:function(){return r.FilmDetails}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FilmDetails=void 0;var i=r(n(0)),a=r(n(70));t.FilmDetails=function(e){var t=e.genre,n=e.overview,r=e.originalTitle,o=e.title,l=e.posterPath,u=e.releaseDate,s=e.score,_=e.voteCount;return i.default.createElement("div",{className:a.default["film-details"]},i.default.createElement("div",{className:a.default["film-details__poster"]},i.default.createElement("img",{className:a.default["film-details__poster--img"],src:l,alt:o})),i.default.createElement("div",{className:a.default["film-details__info"]},i.default.createElement("div",{className:a.default["film-details__title"]},o),r&&i.default.createElement("div",{className:a.default["film-details__original-title"]},r),n&&i.default.createElement("div",null,n),i.default.createElement("div",{className:a.default["film-details__about-title"]},"О фильме"),i.default.createElement("div",{className:a.default["film-details__about-line"]},i.default.createElement("div",{className:a.default["film-details__about-key"]},"Дата производства"),i.default.createElement("div",{className:a.default["film-details__about-value"]},u)),i.default.createElement("div",{className:a.default["film-details__about-line"]},i.default.createElement("div",{className:a.default["film-details__about-key"]},"Жанр"),i.default.createElement("div",{className:a.default["film-details__about-value"]},t)),i.default.createElement("div",{className:a.default["film-details__about-line"]},i.default.createElement("div",{className:a.default["film-details__about-key"]},"Рейтинг"),i.default.createElement("div",{className:a.default["film-details__about-value"]},s," из 10 (",_," оценок)"))))}},function(e,t,n){var r=n(2),i=n(71);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".film-details___1kocI{display:flex;padding:20px;flex-direction:row;flex-wrap:wrap;color:#1d1d1f}@media(max-width: 667px){.film-details___1kocI{flex-direction:column;justify-content:center}}.film-details__poster___wZYM1{margin-right:40px;flex:1 1 250px}@media(max-width: 667px){.film-details__poster___wZYM1{margin-right:0;margin-bottom:20px}}.film-details__poster--img___1l0FT{max-width:100%}.film-details__title___gbCFO{font-size:36px;font-weight:600;margin-bottom:15px}.film-details__original-title___3Pvn2{font-size:14px;color:#86868b;margin-bottom:15px}.film-details__info___1uQEs{flex:3 2 300px}.film-details__about-title___3cWR2{font-size:18px;font-weight:600;margin-top:16px;display:inline-block;margin-bottom:5px}.film-details__about-line___ne5Cm{display:flex;border-bottom:1px solid #313132;padding:10px 0;font-size:14px}.film-details__about-line___ne5Cm:last-child{border-bottom:none}.film-details__about-key___htnLB{width:160px}",""]),t.locals={"film-details":"film-details___1kocI","film-details__poster":"film-details__poster___wZYM1","film-details__poster--img":"film-details__poster--img___1l0FT","film-details__title":"film-details__title___gbCFO","film-details__original-title":"film-details__original-title___3Pvn2","film-details__info":"film-details__info___1uQEs","film-details__about-title":"film-details__about-title___3cWR2","film-details__about-line":"film-details__about-line___ne5Cm","film-details__about-key":"film-details__about-key___htnLB"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(73);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return r.Header}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var i=r(n(0)),a=n(4),o=n(4),l=r(n(74)),u=n(5),s=n(9);t.Header=function(){var e=o.useHistory();return i.default.createElement("div",{className:l.default.header},i.default.createElement("div",{className:l.default.header__content},i.default.createElement("div",{className:l.default.header__logo},i.default.createElement(a.Link,{to:s.MAIN_PATH},"FilmApp")),i.default.createElement("div",null,i.default.createElement(u.Search,{handleSearch:function(t){e.push(""+s.SEARCH_PATH+encodeURI(t))}}))))}},function(e,t,n){var r=n(2),i=n(75);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".header___oDOFF{height:60px}.header__logo___1L3Kc{color:#fff;font-size:24px}.header__content___DMQlX{height:60px;position:fixed;display:flex;justify-content:space-between;align-items:center;right:0;top:0;left:0;z-index:3;background:#313132;padding:0 15px;box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)}",""]),t.locals={header:"header___oDOFF",header__logo:"header__logo___1L3Kc",header__content:"header__content___DMQlX"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77);Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return r.Footer}})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var i=r(n(0)),a=r(n(78));t.Footer=function(){return i.default.createElement("div",{className:a.default.footer},i.default.createElement("div",null,"© 2020 ",i.default.createElement("span",null,i.default.createElement("a",{className:a.default.footer__link,href:"https://github.com/AndreyLebedev95/",target:"_blank"},"Андрей Лебедев"))))}},function(e,t,n){var r=n(2),i=n(79);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".footer___2SJ-5{width:100%;max-width:1280px;height:50px;display:flex;align-items:center;justify-content:center;padding:0 10px;margin:0 auto;box-sizing:border-box;background-color:#313132;color:#86868b}.footer__link___1Xo7p:hover{color:#fff}",""]),t.locals={footer:"footer___2SJ-5",footer__link:"footer__link___1Xo7p"},e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(81);Object.defineProperty(t,"TopFilmsLayout",{enumerable:!0,get:function(){return r.TopFilmsLayout}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TopFilmsLayout=void 0;var o=a(n(0)),l=n(10),u=n(7),s=n(5),_=n(11),f=n(12);t.TopFilmsLayout=function(){var e=_.useRequestFilms(f.requestTopFilms),t=e[0],n=t.films,r=t.totalPages,i=t.page,a=t.loading,d=t.error,c=e[1];return d?o.default.createElement(l.ErrorLayout,null,"Сервер временно недоступен, повторите попытку позже."):o.default.createElement(o.Fragment,null,o.default.createElement(u.FilmsGrid,{films:n,totalPages:r,page:i,handlePageChange:c}),a&&o.default.createElement(s.Loader,null))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorLayout=void 0;var i=r(n(0)),a=r(n(83));t.ErrorLayout=function(e){var t=e.children;return i.default.createElement("div",{className:a.default["error-layout"]},i.default.createElement("div",null,t))}},function(e,t,n){var r=n(2),i=n(84);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,".error-layout___24Pby{display:flex;width:100%;height:100%;justify-content:center;align-items:center;position:absolute;top:0;left:0;bottom:0;right:0}",""]),t.locals={"error-layout":"error-layout___24Pby"},e.exports=t},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],o=0,l=a.length;o<l;o++,i++)r[i]=a[o];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useRequestFilms=t.useRequest=void 0;var o=n(0),l=function(e){var t,n,r=void 0===e?{}:e,i=r.defaultPage,a=void 0===i?1:i,l=r.updateParams,u=void 0===l?[]:l,s=o.useState(a),_=s[0],f=s[1],d=(t=u,n=o.useRef(),o.useEffect((function(){n.current=t})),n.current||u).some((function(e,t){return e!==u[t]}));return o.useEffect((function(){f(a)}),u),[d?a:_,f]};t.useRequest=function(e,t){void 0===t&&(t=[]);var n=o.useState(),r=n[0],i=n[1],a=o.useState(!0),l=a[0],u=a[1],s=o.useState(!1),_=s[0],f=s[1];return o.useEffect((function(){u(!0),f(!1),Promise.resolve(e.apply(void 0,t)).then((function(e){i(e)}),(function(){return f(!0)})).then((function(){return u(!1)}))}),t),{result:r,loading:l,error:_}},t.useRequestFilms=function(e,n){void 0===n&&(n=[]);var o=l({updateParams:n}),u=o[0],s=o[1],_=t.useRequest(e,a([u],n)),f=_.result,d=void 0===f?{totalPages:1,films:[]}:f,c=i(_,["result"]);return[r(r(r({},c),d),{page:u}),s]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.requestFilm=t.requestSearchFilms=t.requestTopFilms=void 0;var r=n(20),i=n(87);t.requestTopFilms=function(e){return i.fetchJson(i.getUrlWithCommonQueries(r.BASE_URL+"movie/top_rated?page="+e)).then(i.requestFilmsResponseMapper)},t.requestSearchFilms=function(e,t){var n=i.getUrlWithCommonQueries(r.BASE_URL+"search/movie?query="+encodeURI(t)+"&page="+e);return i.fetchJson(n).then(i.requestFilmsResponseMapper)},t.requestFilm=function(e){return i.fetchJson(i.getUrlWithCommonQueries(r.BASE_URL+"movie/"+e)).then((function(e){var t=e.genres,n=e.overview,i=e.original_title,a=e.title,o=e.poster_path,l=e.release_date,u=e.vote_average,s=e.vote_count;return{genre:t.map((function(e){return e.name})).join(", "),overview:n,originalTitle:i,title:a,posterPath:r.ORIGINAL_SIZE_POSTER_BASE_URL+o,releaseDate:l,score:u,voteCount:s}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchJson=t.requestFilmsResponseMapper=t.getUrlWithCommonQueries=void 0;var r=n(20);t.getUrlWithCommonQueries=function(e){return e+(~e.indexOf("?")?"&":"?")+r.AUTH_QUERY+"&"+r.LANGUAGE_QUERY},t.requestFilmsResponseMapper=function(e){return{totalPages:e.total_pages,films:e.results.map((function(e){var t=e.title,n=e.poster_path;return{id:e.id,title:t,posterUrl:r.SMALL_POSTER_BASE_URL+n}}))}},t.fetchJson=function(e){return fetch(e).then((function(e){return e.ok?e.json():Promise.reject(e)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(89);Object.defineProperty(t,"FilmLayout",{enumerable:!0,get:function(){return r.FilmLayout}})},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FilmLayout=void 0;var a=i(n(0)),o=n(4),l=n(10),u=n(5),s=n(7),_=n(11),f=n(12);t.FilmLayout=function(){var e=o.useParams().filmId,t=_.useRequest(f.requestFilm,[e]),n=t.loading,i=t.error,d=t.result;return i?a.default.createElement(l.ErrorLayout,null,"Не удалось получить информацию о фильме"):n?a.default.createElement(u.Loader,null):a.default.createElement(s.FilmDetails,r({},d))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(91);Object.defineProperty(t,"SearchFilmsLayout",{enumerable:!0,get:function(){return r.SearchFilmsLayout}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchFilmsLayout=void 0;var o=a(n(0)),l=n(4),u=n(10),s=n(7),_=n(5),f=n(11),d=n(12);t.SearchFilmsLayout=function(){var e=l.useParams().query,t=f.useRequestFilms(d.requestSearchFilms,[e]),n=t[0],r=n.films,i=n.totalPages,a=n.page,c=n.loading,p=n.error,m=t[1];return p?o.default.createElement(u.ErrorLayout,null,"Что-то пошло не так :("):c||r.length?o.default.createElement(o.Fragment,null,o.default.createElement(s.FilmsGrid,{films:r,totalPages:i,page:a,handlePageChange:m}),c&&o.default.createElement(_.Loader,null)):o.default.createElement(u.ErrorLayout,null,"Фильмов с таким названием не найдено")}},function(e,t,n){var r=n(2),i=n(93);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){(t=n(3)(!1)).push([e.i,'*{margin:0;padding:0}html,body,#main{height:100%}body{background-color:#f5f5f7;font-family:"Roboto",sans-serif;color:#1d1d1f}button,input{border:none;outline:none}a:focus,input:focus{outline:none}a{color:inherit;text-decoration:none}',""]),e.exports=t}]);
//# sourceMappingURL=main.0b01d3780131d1653677.js.map