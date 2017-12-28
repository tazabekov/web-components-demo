const templateEl = document.createElement('template');
templateEl.innerHTML = `
    <link rel="stylesheet" href="/components/binary-counter/binary-counter.css">
    <span id="decimal" class="red">decimal</span>: <span id="binary">binary</span>
`;

export default class BinaryCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
    }

    connectedCallback() {
        if (!this.getAttribute("count")) {
            this.setAttribute("count", this._count);
        } else {
            this.count = this.getAttribute("count");
        }
    }

    static get observedAttributes() { return ["count"]; }
    attributeChangedCallback(attrName, oldVal, newVal){
        if (newVal !== oldVal) {
            this[attrName] = newVal;
        }
    }

    get count() { return this._count; }
    set count(count) {
        if (this._count !== count) {
            this._count = parseInt(count);
            this.setAttribute("count", this._count);

            this.shadowRoot.querySelector("#decimal").innerHTML = this._count;
            this.shadowRoot.querySelector("#binary").innerHTML = this._count.toString(2);
        }
    }
}

customElements.define("binary-counter", BinaryCounter);
