import{g as _,i,c as C,s as g,t as $,a as o,b as M,d as f,F as O,e as H,S as R}from"./entry-client-44acf969.js";/* empty css               */const j=$('<a class="hero min-h-screen bg-base-700"><div class="hero-content flex-col lg:flex-row"><img class="max-w-sm rounded-lg shadow-2xl"><div><h1 class="text-5xl font-bold"></h1><h1 class="text-5xl font-bold"></h1><p class="py-6">');function k(s){return(()=>{const l=_(j),v=l.firstChild,a=v.firstChild,h=a.nextSibling,e=h.firstChild,t=e.nextSibling,r=t.nextSibling;return i(e,()=>s.name),i(t,()=>s.title),i(r,()=>s.overview),C(n=>{const u="/preview/movie/"+s.id,m=s.id,c="https://image.tmdb.org/t/p/original"+s.img;return u!==n._v$&&g(l,"href",n._v$=u),m!==n._v$2&&g(v,"href",n._v$2=m),c!==n._v$3&&g(a,"src",n._v$3=c),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l})()}const q=$('<div class="row-container">'),A=$('<a class="card w-96 bg-base-100 shadow-xl image-full m-2" id="row"><figure><img alt="Shoes"></figure><div class="card-body"><h2 class="card-title"></h2><h2 class="card-title"></h2><div class="info-container"><ion-icon name="star" id="rating"></ion-icon><label class="m-2" for="rating"></label><p>',!0,!1),[E,J]=o(),[y,I]=o(),[P,T]=o(),[z,B]=o(),[D,G]=o();o();function Q(){const s=async e=>{const t=await(await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0")).json(),r=JSON.parse(JSON.stringify(t).replace(/\:null/gi,':""'));return console.log(r),r};let[l,v]=o(),[a]=M(l,s);v("yo");const h=async()=>{try{const r=(await(await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0")).json()).results[0];return r?(console.log("First Recommended Movie:",r),r):(console.error("No movies found in the response."),null)}catch(e){throw console.error("An error occurred:",e),e}};return h().then(e=>{T(e.name),I(e.title),J(e.overview),G(e.poster_path),B(e.id)}),console.log(h().catch(e=>{console.error("Failed to fetch movie:",e)})),console.log(y()),(()=>{const e=_(q);return i(e,f(R,{get when(){return a()},get children(){return[" ",f(k,{get img(){return D()},get name(){return P()},get title(){return y()},get overview(){return E()},get id(){return z()}}),f(O,{get each(){return a().results},children:t=>(()=>{const r=_(A),n=r.firstChild,u=n.firstChild,m=n.nextSibling,c=m.firstChild,b=c.nextSibling,N=b.nextSibling,w=N.firstChild,x=w.nextSibling,F=x.nextSibling;return i(c,()=>t.name),i(b,()=>t.title),w._$owner=H(),i(x,()=>t.vote_average),i(F,()=>t.release_date),C(d=>{const p="/preview/movie/"+t.id,S="https://image.tmdb.org/t/p/original"+t.poster_path;return p!==d._v$&&g(r,"href",d._v$=p),S!==d._v$2&&g(u,"src",d._v$2=S),d},{_v$:void 0,_v$2:void 0}),r})()})]}})),e})()}export{Q as default};
