const templateEl = document.createElement('template');
templateEl.innerHTML = `
    <span id="decimal">decimal</span>
    <span id="binary" >binary</span>
`;

export class BinaryCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
    }
}

customElements.define("binary-counter", BinaryCounter);
