class ElementoCustomizado extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const texto = document.createElement('span');
    texto.setAttribute('class', 'texto');
    texto.textContent = `Eu sou um Web Component! :)`;

    const style = document.createElement('style');
    style.textContent = `
      .texto {
        font-size: 30px;
        background-color:  ${this.getAttribute('cor')};
        font-family: cursive;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(texto);
  }
}
customElements.define('elemento-customizado', ElementoCustomizado);
