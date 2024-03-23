import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("drop-down")
export class DropDownElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  @property()
  align: "left" | "right" = "left";

  render() {
    const menuStyle =
      this.align === "left"
        ? ""
        : "--position-left: auto; --position-right: 0;";

    return html`
      <input type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot name="icon"></slot>
      </label>
      <slot name="menu" style=${menuStyle}></slot>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      top: 0;
      left: 0; /* Position the component to the left */
      z-index: 999; /* Ensure it's above other content */
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0; /* Align the menu to the left */
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;

  _handleChange(ev: InputEvent) {
    const target = ev.target as HTMLInputElement; // modified by adding "as HTMLInputElement"
    this._toggle(target?.checked);
  }

  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: Event) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
}