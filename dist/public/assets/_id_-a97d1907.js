import{u as h,a as m,b,g as v,i as n,d as y,c as C,s as p,S as N,t as u}from"./entry-client-44acf969.js";const J=u("<p>"),O=u('<div class="cont"><iframe width="1280px" height="720px" frameborder="0"></iframe><div class="card w-96 bg-base-100 shadow-xl image-full"><h1 class="title"></h1><h1 class="title"></h1><figure><img alt="poster" class=""></figure><div class="card-body"><h3>'),j=async i=>{const e=await(await fetch(`https://api.themoviedb.org/3/tv/${i}?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`)).json();return JSON.parse(JSON.stringify(e).replace(/\:null/gi,':""'))},k=async i=>{const e=await(await fetch(`https://api.themoviedb.org/3/movie/${i}/external_ids?api_key=b1cb5f9ac574441a7b5b26e4c42f68c0`)).json(),r=JSON.parse(JSON.stringify(e).replace(/\:null/gi,':""'));return console.log(e),r};function I(){const i=h();let[e,r]=m(),[t]=b(e,j),[_,q]=m();return b(_,k),r(i.id),[(()=>{const a=v(J);return n(a,()=>t.loading&&"Loading..."),a})(),y(N,{get when(){return t()},get children(){const a=v(O),l=a.firstChild,$=l.nextSibling,c=$.firstChild,o=c.nextSibling,d=o.nextSibling,S=d.firstChild,w=d.nextSibling,x=w.firstChild;return n(c,()=>t().title),n(o,()=>t().name),n(x,()=>t().overview),C(s=>{const g=`https://vidsrc.to/embed/tv/${h().id}`,f="https://image.tmdb.org/t/p/original"+t().poster_path;return g!==s._v$&&p(l,"src",s._v$=g),f!==s._v$2&&p(S,"src",s._v$2=f),s},{_v$:void 0,_v$2:void 0}),a}})]}export{I as default};
