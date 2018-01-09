const templateEl = document.createElement('template');
templateEl.innerHTML = `
    C3 app starts here
`;

export default class C3App extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.querySelectorAll("route").forEach((node, index, list) => {
      let script = document.createElement('script');
      script.setAttribute("type", "module");
      script.setAttribute("src", node.getAttribute("src"));
      templateEl.appendChild(script);
    });
    this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
  }
}

customElements.define("c3-app", C3App);
