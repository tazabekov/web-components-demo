const templateEl = document.createElement('template');
templateEl.innerHTML = `
    <button id="up">UP</button>
    <button id="down">DOWN</button>
    <slot></slot>
`;

export class CounterToggler extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#up")
            .addEventListener("click", this.onUpClick.bind(this));

        this.shadowRoot.querySelector("#down")
            .addEventListener("click", this.onDownClick.bind(this));
    }

    onUpClick(){
        let bc = this.querySelector("binary-counter");
        let currCount = parseInt(bc.getAttribute("count"));
        bc.setAttribute("count", currCount+1);
    }

    onDownClick(){
        let bc = this.querySelector("binary-counter");
        let currCount = parseInt(bc.getAttribute("count"));
        bc.setAttribute("count", currCount-1);
    }
}

customElements.define("counter-toggler", CounterToggler);
