const templateEl = document.createElement('template');
templateEl.innerHTML = `
    <span id="decimal">decimal</span>: <span id="binary"></span>
`;

export class BinaryCounter extends HTMLElement {

}

customElements.define("binary-counter", BinaryCounter);
