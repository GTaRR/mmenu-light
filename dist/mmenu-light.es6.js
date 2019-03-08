/*!
 * mmenu-light v1.0.2
 * mmenujs.com/mmenu-light
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
const mmlight=(()=>{const e=e=>Array.prototype.slice.call(e),t=(t,m)=>e((m||document).querySelectorAll(t));var m=()=>{document.addEventListener("click",e=>{const t=e.target;t.closest(".mm")&&t.matches("a")&&e.stopPropagation()}),document.addEventListener("click",t=>{const m=t.target,s=m.closest(".mm");if(s){let a=t.target.matches("li")?m:!!m.matches("span")&&m.parentElement;a&&(t.stopPropagation(),a.parentElement.classList.add("mm--parent"),e(a.children).forEach(e=>{e.matches("ul")&&s.mmenu.openPanel(e)}))}}),document.addEventListener("click",e=>{const m=e.target;if(m.matches(".mm")){e.stopPropagation();let s=t(".mm--open",m),a=s[s.length-1];if(a){a.classList.remove("mm--open");let e=a.parentElement.closest("ul");e&&m.mmenu.openPanel(e)}}}),document.addEventListener("click",e=>{e.target.closest(".mm")||t(".mm.mm--open").forEach(t=>{e.preventDefault(),t.mmenu.close()})})};return s=>{m(),m=(()=>{});var a=null;const n=e=>{s.classList[e.matches?"add":"remove"]("mm")},l={create:e=>(void 0===e&&(e="all"),"number"==typeof e&&(e="(max-width: "+e+"px)"),(a=window.matchMedia(e)).addListener(n),s.classList[a.matches?"add":"remove"]("mm"),l),destroy:()=>(a.removeListener(n),s.classList.remove("mm"),l),init:e=>{let m=t(e,s),a=m[m.length-1],n=null;return a&&(n=a.closest("ul")),n||(n=s.querySelector("ul")),l.openPanel(n),l},open:()=>(s.classList.add("mm--open"),l),close:()=>(s.classList.remove("mm--open"),l),openPanel:m=>{m||(m=s.querySelector("ul"));let a=m.dataset.mmTitle,n=m.parentElement;n===s?(s.classList.add("mm--home"),a||(a="Menu"),s.dataset.mmTitle=a):(s.classList.remove("mm--home"),a||e(n.children).forEach(e=>{e.matches("a, span")&&(a=e.textContent)}),a&&(s.dataset.mmTitle=a)),t(".mm--open",s).forEach(e=>{e.classList.remove(".mm--open","mm--parent")}),m.classList.add("mm--open"),m.classList.remove("mm--parent");let o=m.parentElement.closest("ul");for(;o;)o.classList.add("mm--open","mm--parent"),o=o.parentElement.closest("ul");return l}};return s.mmenu=l,l}})();export default mmlight;