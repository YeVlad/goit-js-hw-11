import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(o,s){const r="16991331-df0a6792d36af314f174a3b15",a="https://pixabay.com/api/",e=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${a}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(o){return o.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
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
                    <span class="info-value">${i}</span>
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
        </li>`).join("")}const h=document.querySelector(".form-search"),n=document.querySelector(".loader");n.style.borderColor="white";n.style.borderBottomColor="transparent";const l=document.querySelector(".images-place"),y=new u(".card .place-for-image a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",g);async function g(o){o.preventDefault(),l.innerHTML="",n.style.borderColor="black",n.style.borderBottomColor="transparent";const s=o.currentTarget.elements.inputSearch.value;f(s).then(r=>{if(r.total==0)return c.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;l.insertAdjacentHTML("beforeend",m(r)),y.refresh(),o.currentTarget.elements.inputSearch.value=""}).catch(r=>{r.length!=null&&c.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{n.style.borderColor="white",n.style.borderBottomColor="transparent"})}
//# sourceMappingURL=commonHelpers.js.map
