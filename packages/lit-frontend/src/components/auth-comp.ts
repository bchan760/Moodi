import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("auth-comp")
export class AuthProfileElement extends LitElement {

    @property({ reflect: true, type: Boolean })
    open: boolean = false;

    @property({type: Boolean}) 
    authState: boolean = false;

    render(){
        return html`
            <input type="checkbox"
            id="is-shown"
            @change=${this._handleAuth}
            .checked=${this.authState} />
        `;
    }

    _handleAuth(ev: InputEvent) {
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