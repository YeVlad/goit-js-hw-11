(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function l(n){return n.hits.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:r,comments:c,downloads:i})=>`
        <li class="card">
            <a href="${o}">
                <img src="${a}" alt="${e}"/>
            </a>
            <div>
                <div>
                    <span class="bold-text">Likes</span>
                    <span class="info">${t}</span>
                </div>
                <div>
                    <span class="bold-text">Views</span>
                    <span class="info">${r}</span>
                </div>
                <div>
                    <span class="bold-text">Comments</span>
                    <span class="info">${c}</span>
                </div><div>
                    <span class="bold-text">Downloads</span>
                    <span class="info">${i}</span>
                </div>
            </div>
        </li>`).join("")}async function d(n,s,a){const o="16991331-df0a6792d36af314f174a3b15",e="https://pixabay.com/api/",t=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});s.hidden=!1,fetch(`${e}?${t}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>l(r)).then(r=>{s.hidden=!0,a.insertAdjacentHTML("beforeend",r)}).catch(r=>{s.hidden=!0,console.log(r)})}const u=document.querySelector(".form-search"),f=document.querySelector(".text-wait"),p=document.querySelector(".images-place");u.addEventListener("submit",h);async function h(n){n.preventDefault();const s=n.currentTarget.elements.inputSearch.value;await d(s,f,p)}
//# sourceMappingURL=commonHelpers.js.map
