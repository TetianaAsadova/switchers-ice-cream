(()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelectorAll("[data-modal-close]"),modal:document.querySelectorAll("[data-modal]"),body:document.body};let l=0;for(let e of o.openModalBtn){function d(l){for(let l=0;l<o.modal.length;l++)o.modal[l].classList.add("is-hidden");o.modal[l].classList.remove("is-hidden"),o.body.classList.add("overflow")}e.onclick=()=>{l=+e.dataset.modalOpen,d(l)}}for(let a of o.closeModalBtn){a.onclick=()=>{var d;l=+a.dataset.modalClose,d=l,o.modal[d].classList.add("is-hidden"),o.body.classList.remove("overflow")}}})();
//# sourceMappingURL=index.e7afe5cd.js.map