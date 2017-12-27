fetch("/components/binary-counter/binary-counter.html")
.then(fetchResponse => fetchResponse.text())
.then(templateText => {

    const templateEl = new DOMParser().parseFromString(templateText, 'text/html').querySelector('template');

    class BinaryCounter extends HTMLElement {
        constructor(){
            super();
        }
    }
    customElements.define("binary-counter", BinaryCounter);
});
