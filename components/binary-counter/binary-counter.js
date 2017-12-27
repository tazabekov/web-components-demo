fetch("/components/binary-counter/binary-counter.html")
.then(res => res.text())
.then(textTemplate => {

    const HTMLTemplate = new DOMParser().parseFromString(textTemplate, 'text/html').querySelector('template');

    class BinaryCounter extends HTMLElement {
        constructor(){
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const instance = HTMLTemplate.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        }

    }
    customElements.define("binary-counter", BinaryCounter);
});
