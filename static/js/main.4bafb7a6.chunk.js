(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{230:function(t,n,e){"use strict";e.r(n);var r,a=e(0),i=e.n(a),c=e(87),o=e.n(c),s=(e(97),e(25)),l=e.n(s),d=e(59),u=e(56),j=e(12),b=e(1),m=Object(a.createContext)({}),p=function(t){var n=t.children,e=Object(a.useState)([]),r=Object(j.a)(e,2),i=r[0],c=r[1],o=Object(a.useState)("https://pokeapi.co/api/v2/pokemon"),s=Object(j.a)(o,2),p=s[0],h=s[1],g=Object(a.useRef)(null),f=Object(a.useCallback)(Object(u.a)(l.a.mark((function t(){var n,e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p);case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,g.current=e.next,c((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.results))}));case 8:case"end":return t.stop()}}),t)}))),[p]),O=Object(a.useCallback)((function(){return h(g.current||"")}),[]);Object(a.useEffect)((function(){p&&f()}),[p,f]);var x=Object(a.useState)({}),v=Object(j.a)(x,2),k=v[0],w=v[1],y=Object(a.useCallback)(function(){var t=Object(u.a)(l.a.mark((function t(n){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,w(r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[]);return Object(b.jsx)(m.Provider,{value:{pokemonList:i,page:p,currentPokemon:k,getPokemon:f,setPage:O,getPokemonById:y},children:n})},h=e(91),g=e(2),f=e(3),O=e(4),x=O.a.div(r||(r=Object(f.a)(["\n\tmargin: 0 auto;\n\tmax-width: 120rem;\n\tpadding: 0 2rem;\n\twidth: 100%;\n"])));var v,k=function(t){var n=t.children;return Object(b.jsx)(x,{children:n})},w=e.p+"static/media/pokeball.0f112db8.svg",y=O.a.header(v||(v=Object(f.a)(["\n\tposition: relative;\n\theight: 20rem;\n\tdisplay: flex;\n\talign-items: center;\n\timg {\n\t\tdisplay: block;\n\t\theight: 24.8rem;\n\t\twidth: 24.8rem;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -1rem;\n\t\tz-index: -1;\n\t}\n\th1 {\n\t\tfont-size: 3rem;\n\t\tletter-spacing: 1px;\n\t}\n"])));var C,P,A,z=function(){return Object(b.jsx)(y,{children:Object(b.jsxs)(k,{children:[Object(b.jsx)("img",{src:w,alt:"pokeball"}),Object(b.jsx)("h1",{children:"Pokedex"})]})})},B=Object(O.b)(C||(C=Object(f.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),F=O.a.div(P||(P=Object(f.a)(["\n\tborder-top: 0.2rem solid #fff;\n\tborder-radius: 50%;\n\theight: 2.5rem;\n\tdisplay: ",";\n\twidth: 2.5rem;\n\tmargin-left: ",";\n\tmargin-right: ",";\n\tanimation: "," 1s linear infinite;\n"])),(function(t){return"visible"===t.className?"block":"none"}),(function(t){return"right"===t.align||"center"===t.align?"auto":0}),(function(t){return"left"===t.align||"center"===t.align?"auto":0}),B),I=Object(a.forwardRef)((function(t,n){var e=t.align,r=t.className,a=void 0===r?"visible":r;return Object(b.jsx)("div",{ref:n,role:"status","aria-label":"Loading...",children:Object(b.jsx)(F,{className:a,align:e})})})),L=e(38);function S(t){return(299*t.r+587*t.g+114*t.b)/1e3}function E(t){if(t&&void 0!==t&&""!==t){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:void 0}}function D(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128;if(void 0===t)return"#000";var e=E(t);return void 0===e||S(e)>=n?"#000":"#fff"}var M=O.a.li(A||(A=Object(f.a)(["\n\tbackground-color: ",";\n\tborder-radius: 0.5rem;\n\tcursor: pointer;\n\theight: ",";\n\tpadding: 1.5rem 0.4rem;\n\tpadding-right: ",";\n\twidth: 100%;\n\ttransition: background-color 0.5s ease, height 0.5s ease;\n\ta {\n\t\ttext-decoration: none;\n\t}\n\tp {\n\t\tcolor: ",";\n\t\tfont-size: 2rem;\n\t\tfont-weight: 500;\n\t\tletter-spacing: 0.5px;\n\t\tmargin: 0 0 0rem 1rem;\n\t\ttext-transform: capitalize;\n\t}\n\timg {\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\tmargin-left: auto;\n\t\tmax-width: 100%;\n\t\tobject-fit: cover;\n\t\ttransform: ",";\n\t\ttransition: transform 0.3s 0.5s ease;\n\t}\n\t&:hover img {\n\t\ttransform: translate3d(-1.5rem, 0, 0);\n\t\ttransition-delay: 0s;\n\t}\n"])),(function(t){return t.backgroundColor}),(function(t){return t.isLoading?"10rem":"20rem"}),(function(t){return t.isLoading?"1rem":"0.4rem"}),(function(t){return D(t.backgroundColor)}),(function(t){return t.isLoading?"scale3d(0, 0, 0)":"scale3d(1, 1, 1)"}));var N,R=function(t){var n=t.pokemonId,e=t.name,r="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png"),i=Object(L.usePalette)(r),c=i.data,o=i.loading,s=i.error,l=Object(a.useState)(!0),d=Object(j.a)(l,2),u=d[0],m=d[1],p=Object(g.g)();return Object(b.jsxs)(M,{backgroundColor:c.muted||"gray",isLoading:u,onClick:function(){p.push("/pokemon/".concat(n),{name:e,bgc:c.muted,artworkUrl:r})},children:[Object(b.jsx)("p",{children:e}),o?Object(b.jsx)(I,{align:"right"}):!o&&s?Object(b.jsx)("p",{children:"Image not found"}):Object(b.jsx)("img",{src:r,alt:"Pok\xe9mon",onLoad:function(){m(!1)}})]})},U=O.a.ul(N||(N=Object(f.a)(["\n\tlist-style: none;\n\tmargin: 0;\n\tmargin-bottom: 2rem;\n\tpadding: 0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n\tgrid-gap: 2rem 0.6rem;\n"])));var W=function(){var t=Object(a.useContext)(m),n=t.pokemonList,e=t.setPage,r=t.page,i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t=new window.IntersectionObserver((function(t,n){t[0].isIntersecting&&e()}),{root:null,rootMargin:"10px",threshold:1});i.current&&t.observe(i.current)}),[e]),Object(b.jsxs)(k,{children:[Object(b.jsx)(U,{children:n.map((function(t){var n=t.name,e=t.url;return Object(b.jsx)(R,{name:n,pokemonId:+e.split("/")[6]},n)}))}),Object(b.jsx)(I,{ref:i,align:"center",className:r?"visible":"hidden"})]})};var _,H=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z,{}),Object(b.jsx)(W,{})]})};var J=O.a.img.attrs((function(t){return{src:t.src,alt:"Pokemon"}}))(_||(_=Object(f.a)(["\n\tdisplay: block;\n\theight: 30rem;\n\tmargin: 0 auto;\n\tobject-fit: contain;\n\tposition: relative;\n\twidth: 30rem;\n"])));var T,X=function(t){var n=t.image;return Object(b.jsx)(J,{src:n})},$=O.a.div(T||(T=Object(f.a)(["\n\tbackground-color: ",";\n\theight: 100%;\n\twidth: 100%;\n\tclip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 100%);\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransition: background-color 0.5s ease;\n"])),(function(t){return t.bgc}));var G,K=function(t){var n=t.bgc;return Object(b.jsx)($,{bgc:n})},q=e(231),Q=O.a.header(G||(G=Object(f.a)(["\n\tpadding: 1.5rem 2rem;\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbutton {\n\t\tbackground: none;\n\t\tborder: none;\n\t\tcolor: inherit;\n\t\tcursor: pointer;\n\t\tmargin: 0;\n\t\tpadding: 0.5rem;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\tspan {\n\t\tfont-size: 2rem;\n\t\tfont-weight: 900;\n\t\tletter-spacing: 0.3px;\n\t\tmargin-left: -4rem;\n\t}\n"])));var V,Y=function(t){var n=t.id,e=Object(g.g)();return Object(b.jsxs)(Q,{children:[Object(b.jsx)("button",{onClick:function(){if(2===e.length)return e.replace("/");e.goBack()},children:Object(b.jsx)(q.a,{size:32,color:"currentColor"})}),Object(b.jsxs)("span",{children:["#",n<10?"00"+n:n<100?"0"+n:n]}),Object(b.jsx)("div",{})]})},Z=e(232),tt=e(233),nt=O.a.div(V||(V=Object(f.a)(["\n\tcolor: ",";\n\theight: 35rem;\n\tposition: relative;\n\ttranstion: color 0.5s ease;\n\t> button {\n\t\tbackground: rgba(255, 255, 255, 0.45);\n\t\tborder: none;\n\t\tborder-radius: 50%;\n\t\tcolor: #000;\n\t\tcursor: pointer;\n\t\theight: 3.6rem;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 3.6rem;\n\t\tposition: absolute;\n\t\ttop: calc(50% - 1.8rem);\n\t\tz-index: 1;\n\t\ttransition: transform 0.3s ease;\n\t\t&:first-child {\n\t\t\tleft: 1rem;\n\t\t\t&:hover {\n\t\t\t\ttransform: translateX(-0.5rem);\n\t\t\t}\n\t\t}\n\t\t&:last-child {\n\t\t\tright: 1rem;\n\t\t\t&:hover {\n\t\t\t\ttransform: translateX(0.5rem);\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.color}));var et,rt=function(t){var n=t.children,e=t.color,r=Object(g.g)(),a=+Object(g.h)().pathname.split("/")[2];return Object(b.jsxs)(nt,{color:e,children:[Object(b.jsx)("button",{title:"Prev",onClick:function(){return r.push("/pokemon/".concat(a-1))},children:Object(b.jsx)(Z.a,{size:24,color:"currentColor"})}),n,Object(b.jsx)("button",{title:"Next",children:Object(b.jsx)(tt.a,{size:24,color:"currentColor",onClick:function(){return r.push("/pokemon/".concat(a+1))}})})]})},at=new Map([["normal","#A8A77A"],["fire","#EE8130"],["water","#6390F0"],["electric","#F7D02C"],["grass","#7AC74C"],["ice","#96D9D6"],["fighting","#C22E28"],["poison","#A33EA1"],["ground","#E2BF65"],["flying","#A98FF3"],["psychic","#F95587"],["bug","#A6B91A"],["rock","#B6A136"],["ghost","#735797"],["dragon","#6F35FC"],["dark","#705746"],["steel","#B7B7CE"],["fairy","#D685AD"]]),it=new Map([["hp","HP"],["attack","Attack"],["defense","Defense"],["special-attack","Sp. Atk"],["special-defense","Sp. Def"],["speed","Speed"]]),ct=O.a.ul(et||(et=Object(f.a)(["\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tli {\n\t\tflex: 0.45;\n\t\tborder-radius: 2rem;\n\t\tpadding: 0.8rem;\n\t\ttext-align: center;\n\t\tuser-select: none;\n\t\ttext-transform: capitalize;\n\t}\n"])));var ot,st=function(t){var n=t.typeList;return Object(b.jsx)(ct,{children:n.map((function(t){return Object(b.jsx)("li",{style:{backgroundColor:at.get(t.type.name)},children:t.type.name},t.type.name)}))})},lt=O.a.div(ot||(ot=Object(f.a)(["\n\th2 {\n\t\ttext-align: center;\n\t}\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tli {\n\t\tmargin-bottom: 2rem;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 35% 1fr;\n\t\tgap: 2rem;\n\t\talign-items: center;\n\t\tdiv:first-child {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\tdiv:last-child {\n\t\t\tbackground-color: #f4f5f4;\n\t\t\tborder-radius: 0.4rem;\n\t\t\theight: 0.4rem;\n      overflow: hidden;\n\t\t\tdiv {\n\t\t\t\tborder-radius: 0.4rem;\n\t\t\t\twidth: 0;\n\t\t\t\ttransition: width 0.3s ease;\n\t\t\t}\n\t\t}\n\t}\n"])));var dt,ut=function(t){var n=t.stats;return Object(b.jsxs)(lt,{children:[Object(b.jsx)("h2",{children:"Base Stats"}),Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:it.get(t.stat.name)})," ",t.base_stat]}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{backgroundColor:t.base_stat<50?"#FB6C6C":"#4BC07A",width:"".concat(t.base_stat,"%")}})})]},t.stat.name)}))})]})},jt=O.a.div(dt||(dt=Object(f.a)(["\n\tcolor: #fff;\n\t> div:first-of-type {\n\t\tmargin-top: 3rem;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tdiv {\n\t\t\ttext-align: center;\n\t\t}\n\t\tp {\n\t\t\tfont-size: 3rem;\n\t\t\tfont-weight: 700;\n\t\t\tmargin: 0;\n\t\t\tspan {\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t}\n\t\t}\n\t}\n"])));var bt,mt=function(t){var n=t.pokemon;return Object(b.jsx)(k,{children:Object(b.jsxs)(jt,{children:[Object(b.jsx)(st,{typeList:n.types}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:n.order}),Object(b.jsx)("span",{children:"Order"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[n.height/10," ",Object(b.jsx)("span",{children:"M"})]}),Object(b.jsx)("span",{children:"Height"})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[n.weight/10," ",Object(b.jsx)("span",{children:"KG"})]}),Object(b.jsx)("span",{children:"Weight"})]})]}),Object(b.jsx)(ut,{stats:n.stats})]})})},pt=O.a.div(bt||(bt=Object(f.a)(["\n\th1 {\n\t\tfont-size: 3.6rem;\n\t\tletter-spacing: 1.5px;\n\t\tmargin-top: 4rem;\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t}\n"])));var ht=function(t){var n=t.match,e=t.location,r=n.params.id,i=function(t,n){var e="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png"),r=Object(L.usePalette)(e).data;return t||{name:null,artworkUrl:e,bgc:r.muted||"gray"}}(e.state,r),c=i.name,o=i.bgc,s=i.artworkUrl,l=Object(a.useState)(!0),d=Object(j.a)(l,2),u=d[0],p=d[1],h=Object(a.useContext)(m),g=h.getPokemonById,f=h.currentPokemon;return Object(a.useEffect)((function(){g(+r).then((function(){return p(!1)}))}),[g,r]),Object(b.jsxs)(pt,{children:[Object(b.jsxs)(rt,{color:D(o),children:[Object(b.jsx)(Y,{id:+r}),Object(b.jsx)(K,{bgc:o}),Object(b.jsx)(X,{image:s})]}),Object(b.jsx)("h1",{children:c||f.name}),u?Object(b.jsx)(I,{align:"center"}):Object(b.jsx)(mt,{pokemon:f})]})};var gt=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Search Page"})})};var ft=function(){return Object(b.jsx)(h.a,{basename:"/pokemon-app",children:Object(b.jsxs)(g.d,{children:[Object(b.jsx)(g.b,{path:"/",exact:!0,component:H}),Object(b.jsx)(g.b,{path:"/search",exact:!0,component:gt}),Object(b.jsx)(g.b,{path:"/pokemon/:id",exact:!0,component:ht}),Object(b.jsx)(g.a,{to:"/"})]})})};var Ot=function(){return Object(b.jsx)(p,{children:Object(b.jsx)(ft,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,234)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),i(t),c(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(Ot,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),xt()},97:function(t,n,e){}},[[230,1,2]]]);
//# sourceMappingURL=main.4bafb7a6.chunk.js.map