import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile-dropdown")
export class UserProfileDropdown extends LitElement {
    @property({ reflect: true, type: Boolean })
    open: boolean = false;

    @property({ type: String })
    align: 'left' | 'right' = 'right';

    render() {
        return html`
            <div class="dropdown-container">
                <div class="dropdown-button" @click=${this.toggleDropdown}>
                    <slot name="username">Hello User</slot>
                    <img class="prof-pic" src="../assets/avatars/white_default_picon.jpg" alt="Profile Picture">
                </div>
                <div class="dropdown-menu" ?open=${this.open}>
                    <slot name="menu"></slot>
                </div>
            </div>
        `;
    }

    static styles = css`
        :host {
            z-index: 999;
            height: 100%;
        }

        .prof-pic {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .dropdown-container {
            display: flex;
            align-items: center;
            height: 100%;
            position: relative;
            border-left: 1px solid #000;
        }

        .dropdown-button {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: #ffd700;
            border: 1px solid #000;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            padding: 10px;
            display: none;
            z-index: 999;
        }

        :host([align="left"]) .dropdown-menu {
            right: auto;
            left: 0;
        }

        .dropdown-menu[open] {
            display: block;
        }
    `;

    toggleDropdown() {
        this.open = !this.open;
    }
}