fetch("/components/binary-counter/binary-counter.html")
.then(fetchResponse => fetchResponse.text())
.then(templateText => {

    const templateEl = new DOMParser().parseFromString(templateText, 'text/html').querySelector('template');

    class BinaryCounter extends HTMLElement {
        constructor(){
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
        }
    }
    customElements.define("binary-counter", BinaryCounter);
});
