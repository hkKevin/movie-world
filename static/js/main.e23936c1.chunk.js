(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},108:function(e,t,a){},122:function(e,t,a){},145:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},193:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),o=a.n(i),l=a(28),c=a(17),s=a(93),u=a(215);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(106);var p=a(6),d=a(7),m=a(9),h=a(8),v=a(10),f=a(217),E=a(213),g=a(216),b=a(214),y=(a(108),a(4)),w=a.n(y),S=a(12),O=a.n(S),_=(a(122),a(13)),C=a.n(_),k=a(32),j=a(22),T=a.n(j),x=[],P=!1,I=0,R=0,D=0,N=function(e,t,a,n,r,i,o){return{type:"SEARCH_MOVIES_SUCCESS",movies:e,hasResult:t,searchText:a,totalResults:n,totalPages:r,currentPage:i,searchFinished:o}},M=function(e,t,a,n,r){return{type:"SEARCH_MOVIES_FAIL",movies:e,hasResult:t,searchFinished:a,totalResults:n,searchText:r}},U=function(e){return{type:"SELECT_MOVIE_SUCCESS",movieDetails:e}},A=function(e){return{type:"GET_CREDITS_SUCCESS",credits:e}},B=function(e){return{type:"GET_VIDEOS_SUCCESS",videos:e}},F=function(e){return{type:"GET_REVIEWS_SUCCESS",reviews:e}},L=function(e,t){return window.scrollTo(0,0),{type:"SELECT_PAGE_SUCCESS",movies:e,currentPage:t}},V=a(212),H=(a(145),function(){return r.a.createElement("header",{className:"grid header"},r.a.createElement(V.a,{to:"/"},r.a.createElement("p",null,"Movie World")))}),G=(a(147),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onInputChange=function(e){a.props.onSearchMovies(e.target.value)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByName("searchBox")[0].value=this.props.searchText}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"search"},r.a.createElement(O.a,null,r.a.createElement("div",{id:"searchContainer"},r.a.createElement("span",{id:"searchIcon",className:"fas fa-search"}),r.a.createElement("input",{id:"searchBox",name:"searchBox",type:"search",onChange:this.onInputChange,placeholder:"Movie Name...",autoFocus:!0})))))}}]),t}(n.Component)),K=Object(c.b)(function(e){return{searchText:e.searchText}},function(e){return{onSearchMovies:function(t){return e(function(e){return function(t){null!==e&&""!==e?T.a.get("https://api.themoviedb.org/3/search/movie?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&query="+e+"&page=1&include_adult=false").then(function(a){for(var n in x=[],a.data.results)x.push(a.data.results[n]);0===x.length?t(N(x,P=!1,e)):(P=!0,I=a.data.total_results,R=a.data.total_pages,D=a.data.page,t(N(x,P,e,I,R,D,!0)))}).catch(function(e){console.error(e)}):t(M(x=[],P=!1,!0,I=0,e))}}(t))}}})(G),W=(a(149),function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){w.a.rebuild()}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},r.a.createElement(w.a,{effect:"solid",className:"tooltip",type:"light",delayHide:100}),r.a.createElement("div",{id:"footer"},r.a.createElement("div",{id:"tmdb"},r.a.createElement("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",alt:"Logo of The Movie DataBase",width:"100","data-tip":"The Movie DataBase"})),r.a.createElement("p",null,"This product uses the TMDb API but is not endorsed or certified by TMDb.")),r.a.createElement("div",{id:"myself"},r.a.createElement(O.a,{bottom:!0},r.a.createElement("p",null,"Developed by\xa0",r.a.createElement("a",{href:"https://github.com/hkKevin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{id:"myName","data-tip":"GitHub Profile"},"Pak Kiu Leung (Kevin)")))),r.a.createElement("a",{href:"https://github.com/hkKevin/movie-world",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x","data-tip":"GitHub Repository"})))))}}]),t}(n.Component)),$=(a(151),function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){w.a.rebuild()}},{key:"render",value:function(){var e=window.$;e(window).scroll(function(){e(window).scrollTop()>500?e("#toTop").fadeIn():e("#toTop").fadeOut()});return r.a.createElement("div",null,r.a.createElement(w.a,{effect:"solid",className:"tooltip",type:"light"}),r.a.createElement("i",{id:"toTop",className:"fas fa-chevron-circle-up fa-2x overlayBtn",onClick:function(){window.scrollTo(0,0)},"data-tip":"TOP"}))}}]),t}(n.Component)),J=a(96),q=(a(193),function(e){return r.a.createElement(J.a,{onChange:e.onChange,current:e.currentPage,total:e.totalPages>1e3?1e3:e.totalPages,pageSize:1,itemRender:function(e,t,a){return"prev"===t?"<":"next"===t?">":a},showTitle:!1,showLessItems:!0,showPrevNextJumpers:!1})}),X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){a.props.onPageChanged(e,a.props.searchText)},a.movieClicked=function(e){a.props.onMovieSelected(e),a.props.history.push("/movie")},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){w.a.rebuild()}},{key:"render",value:function(){var e=this,t=null,a=null,n=null;return this.props.searchText&&!this.props.hasResult&&(t=r.a.createElement("div",{id:"has-result-or-not"},r.a.createElement("h3",null,"NO SEARCH RESULTS FOUND"),r.a.createElement("p",null,'There are no movies that matched "',this.props.searchText,'".'))),null===this.props.searchText&&""===this.props.searchText||(a=this.props.fetchedMovies.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(O.a,null,r.a.createElement("div",{className:"movie",onClick:function(){e.movieClicked(t.id)}},t.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+t.poster_path,"data-tip":t.title,alt:'Poster of "'+t.title+'"'}):r.a.createElement("img",{src:"https://dummyimage.com/185x278/595959/ffffff.png&text="+t.title,"data-tip":t.title,alt:'Poster of "'+t.title+'" not found'}))))})),0!==this.props.fetchedMovies.length&&(n=r.a.createElement(q,{onChange:this.onChange,currentPage:this.props.currentPage,totalPages:this.props.totalPages>1e3?1e3:this.props.totalPages})),r.a.createElement("div",null,r.a.createElement(w.a,{effect:"solid",className:"tooltip",type:"light"}),r.a.createElement(H,null),r.a.createElement(K,null),n,r.a.createElement("section",{className:"grid"},r.a.createElement("div",{id:"movies-container-grid"},a),t),n,r.a.createElement($,null),r.a.createElement(W,null))}}]),t}(n.Component),z=Object(c.b)(function(e){return{fetchedMovies:e.movies,hasResult:e.hasResult,searchText:e.searchText,totalResults:e.totalResults,totalPages:e.totalPages,initialPage:e.initialPage,searchFinished:e.searchFinished,currentPage:e.currentPage}},function(e){return{onMovieSelected:function(t){return e(function(e){return function(t){function a(){return(a=Object(k.a)(C.a.mark(function a(){var n;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.a.get("https://api.themoviedb.org/3/movie/"+e+"?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&append_to_response=images&include_image_language=en,null");case 3:n=a.sent,t(U(n.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,this,[[0,7]])}))).apply(this,arguments)}function n(){return(n=Object(k.a)(C.a.mark(function a(){var n;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.a.get("https://api.themoviedb.org/3/movie/"+e+"/credits?api_key=34af8294dab051e0d2dc34894beac01c");case 3:n=a.sent,t(A(n.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,this,[[0,7]])}))).apply(this,arguments)}function r(){return(r=Object(k.a)(C.a.mark(function a(){var n;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.a.get("https://api.themoviedb.org/3/movie/"+e+"/videos?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US");case 3:n=a.sent,t(B(n.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,this,[[0,7]])}))).apply(this,arguments)}function i(){return(i=Object(k.a)(C.a.mark(function a(){var n;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.a.get("https://api.themoviedb.org/3/movie/"+e+"/reviews?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&page=1");case 3:n=a.sent,t(F(n.data)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,this,[[0,7]])}))).apply(this,arguments)}null!==e&&""!==e&&(t(function(e){return{type:"SET_MOVIE_ID",movieId:e}}(e)),function(){a.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),function(){r.apply(this,arguments)}(),function(){i.apply(this,arguments)}())}}(t))},onPageChanged:function(t,a){return e(function(e,t){return function(a){x=[],P=!1,I=0,R=0,T.a.get("https://api.themoviedb.org/3/search/movie?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&query="+t+"&page="+e+"&include_adult=false").then(function(e){for(var t in e.data.results)x.push(e.data.results[t]);D=e.data.page,a(L(x,D)),P=!0,I=e.data.total_results,R=e.data.total_pages}).catch(function(e){console.error(e)})}}(t,a))}}})(X),Q=a(94),Y=a(33),Z=a(64),ee=a.n(Z),te=(a(200),a(202),a(204),a(208)),ae=(a(206),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).goBackClicked=function(){a.props.history.goBack()},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){w.a.rebuild()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{effect:"solid",className:"tooltip",type:"light"}),r.a.createElement("i",{id:"goBack",onClick:this.goBackClicked,style:{left:"20px",bottom:"20px"},className:"fas fa-arrow-circle-left fa-2x overlayBtn","data-tip":"BACK"}))}}]),t}(n.Component)),ne=Object(te.a)(ae),re=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){w.a.rebuild()}},{key:"render",value:function(){var e=this,t=null;if(this.props.info)if(this.props.info.id===this.props.movieId){var a=Math.floor(this.props.info.runtime/60),n=this.props.info.runtime%60,i=null,o=[];this.props.credits&&(this.props.credits.crew.map(function(e){return"Director"===e.job&&o.push(" "+e.name),null}),i=o);var l=null;this.props.credits&&(l=this.props.credits.cast.slice(0,5).map(function(e){return e.profile_path?r.a.createElement("div",{key:e.profile_path,className:"castProfilePic"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.profile_path,alt:"Photo of "+e.name,"data-tip":e.name})):null}));var c=null;this.props.videos&&(c=this.props.videos.results.map(function(e){return r.a.createElement(ee.a,{bottom:!0,key:e.id},r.a.createElement("iframe",{title:"video",width:"544",height:"306",src:"https://www.youtube-nocookie.com/embed/"+e.key,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}));var s=null;this.props.info&&(s=this.props.info.images.backdrops.map(function(t){return r.a.createElement("img",{key:t.file_path,src:"https://image.tmdb.org/t/p/w1280"+t.file_path,alt:"Backdrop of "+e.props.info.title})}));var u=null,p=null;this.props.reviews&&(0!==this.props.reviews.results.length&&(u=r.a.createElement("div",{id:"reviewText"},"Reviews")),p=this.props.reviews.results.map(function(e){return e.content?r.a.createElement(ee.a,{bottom:!0,key:e.id},r.a.createElement(Y.AccordionItem,null,r.a.createElement(Y.AccordionItemTitle,null,r.a.createElement("p",null,"From "+e.author+":")),r.a.createElement(Y.AccordionItemBody,null,r.a.createElement("p",null,e.content)))):null})),t=r.a.createElement("div",null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{id:"movieInfo"},r.a.createElement("div",{id:"movieIntro"},r.a.createElement(O.a,null,r.a.createElement("div",{id:"movieTitle"},this.props.info.title),r.a.createElement("div",{id:"yearRuntimeRatingHomepage"},r.a.createElement("span",{id:"year"},this.props.info.release_date.substring(0,4)),r.a.createElement("div",null,a,"h ",n,"m"),r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-star fa-xs"}),this.props.info.vote_average,r.a.createElement("span",{id:"denominator"}," / 10")),r.a.createElement("div",null,this.props.info.homepage?r.a.createElement("a",{href:this.props.info.homepage,target:"_blank",rel:"noopener noreferrer","data-tip":'Homepage of "'+this.props.info.title+'"'},r.a.createElement("i",{id:"homepageIcon",className:"fas fa-link"})):null)))),r.a.createElement("div",{id:"movieDetails"},r.a.createElement(O.a,null,r.a.createElement("div",{id:"left"},this.props.info.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342"+this.props.info.poster_path,alt:'Poster of "'+this.props.info.title+'"'}):r.a.createElement("p",null,'Poster of "',this.props.info.title,'" not found'))),r.a.createElement(O.a,null,r.a.createElement("div",{id:"right"},r.a.createElement("p",null,this.props.info.overview),r.a.createElement("div",{id:"budgetRevenueContainer"},r.a.createElement("p",null,"Budget: $ ",this.props.info.budget.toLocaleString()),r.a.createElement("p",null,"Revenue: $ ",this.props.info.revenue.toLocaleString())),r.a.createElement("div",{id:"directorContainer"},"Directed by "+i),r.a.createElement("div",{id:"castContainer"},l)))),r.a.createElement("div",{id:"videoContainer"},c))),this.props.info.images.backdrops?r.a.createElement(Q.Carousel,{showIndicators:!1,useKeyboardArrows:!0,infiniteLoop:!0,autoPlay:!0,interval:5e3},s):null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{id:"movieInfo"},r.a.createElement("div",null,u,r.a.createElement(Y.Accordion,{accordion:!1},p)))))}else t=r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null));else t=r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null));return r.a.createElement("div",null,r.a.createElement(w.a,{effect:"solid",className:"tooltip",type:"light",delayHide:100}),r.a.createElement(H,null),r.a.createElement(ne,null),r.a.createElement($,null),t,r.a.createElement(W,null))}}]),t}(n.Component),ie=Object(c.b)(function(e){return{info:e.movieDetails,movieId:e.movieId,credits:e.credits,reviews:e.reviews,videos:e.videos}},null)(re),oe=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=r.a.createElement(f.a,null,r.a.createElement(E.a,{path:"/movie",component:ie}),r.a.createElement(E.a,{path:"/",exact:!0,component:z}),r.a.createElement(g.a,{to:"/"}));return r.a.createElement("div",{className:"App"},e)}}]),t}(n.Component),le=Object(b.a)(oe),ce=a(14),se={movies:[],searchText:"",totalResults:0,totalPages:0,currentPage:0,searchFinished:!1,movieDetails:null,movieId:null,credits:null,reviews:null,videos:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIES_SUCCESS":return Object(ce.a)({},e,{movies:t.movies,hasResult:t.hasResult,searchText:t.searchText,totalResults:t.totalResults,totalPages:t.totalPages,currentPage:t.currentPage,searchFinished:t.searchFinished});case"SEARCH_MOVIES_FAIL":return Object(ce.a)({},e,{movies:t.movies,hasResult:t.hasResult,searchText:t.searchText,totalResults:t.totalResults,searchFinished:t.searchFinished});case"SELECT_MOVIE_SUCCESS":return Object(ce.a)({},e,{movieDetails:t.movieDetails});case"SET_MOVIE_ID":return Object(ce.a)({},e,{movieId:t.movieId});case"GET_CREDITS_SUCCESS":return Object(ce.a)({},e,{credits:t.credits});case"GET_VIDEOS_SUCCESS":return Object(ce.a)({},e,{videos:t.videos});case"GET_REVIEWS_SUCCESS":return Object(ce.a)({},e,{reviews:t.reviews});case"SELECT_PAGE_SUCCESS":return Object(ce.a)({},e,{movies:t.movies,currentPage:t.currentPage});default:return e}},pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,de=Object(l.d)(ue,pe(Object(l.a)(s.a)));o.a.render(r.a.createElement(c.a,{store:de},r.a.createElement(u.a,null,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a(210)}},[[97,2,1]]]);
//# sourceMappingURL=main.e23936c1.chunk.js.map