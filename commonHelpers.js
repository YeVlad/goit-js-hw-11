import{i as p,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(s){return s.hits.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:a,comments:o,downloads:d})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${n}">
                    <img src="${i}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${r}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${a}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${o}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${d}</span>
                </div>
            </div>
        </li>`).join("")}async function m(s,t,i,n){const e="16991331-df0a6792d36af314f174a3b15",r="https://pixabay.com/api/",a=new URLSearchParams({key:e,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});t.style.borderColor="black",t.style.borderBottomColor="transparent",fetch(`${r}?${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.total==0)throw p.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),new Error(o.status);return f(o)}).then(o=>{t.style.borderColor="white",t.style.borderBottomColor="transparent",i.insertAdjacentHTML("beforeend",o),n.refresh()}).catch(o=>{t.style.borderColor="white",t.style.borderBottomColor="transparent",console.log(o)})}const h=document.querySelector(".form-search"),c=document.querySelector(".loader");c.style.borderColor="white";c.style.borderBottomColor="transparent";const l=document.querySelector(".images-place"),y=new u(".card .place-for-image a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",b);async function b(s){s.preventDefault(),l.innerHTML="";const t=s.currentTarget.elements.inputSearch.value;await m(t,c,l,y)}
//# sourceMappingURL=commonHelpers.js.map
