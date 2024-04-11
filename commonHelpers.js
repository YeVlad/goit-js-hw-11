import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(s,o){const r="16991331-df0a6792d36af314f174a3b15",a="https://pixabay.com/api/",e=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return o.style.borderColor="black",o.style.borderBottomColor="transparent",fetch(`${a}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{l.show({title:"Ops.",titleColor:"white",message:t,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})})}function m(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:d,downloads:p})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${a}">
                    <img src="${r}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${n}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${d}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${p}</span>
                </div>
            </div>
        </li>`).join("")}const h=document.querySelector(".form-search"),i=document.querySelector(".loader");i.style.borderColor="white";i.style.borderBottomColor="transparent";const c=document.querySelector(".images-place"),y=new u(".card .place-for-image a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",g);async function g(s){s.preventDefault(),c.innerHTML="";const o=s.currentTarget.elements.inputSearch.value;await f(o,i).then(r=>{if(r.total==0)throw l.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),new Error(r.status);return m(r)}).then(r=>{c.insertAdjacentHTML("beforeend",r),y.refresh()}).finally(()=>{i.style.borderColor="white",i.style.borderBottomColor="transparent"})}
//# sourceMappingURL=commonHelpers.js.map
