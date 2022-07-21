class Wrapper extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    wrapper.textContent = "테스트";

    const style = document.createElement("style");

    style.textContent = `
        .wrapper {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: #767676;
        }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define("body-container", Wrapper);
