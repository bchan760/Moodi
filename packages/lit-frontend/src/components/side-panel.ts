import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../styles/page.css";

@customElement("side-panel")
export class UserPanelElement extends LitElement {
  @property()
  avatar: string = "";

  @property({ type: String })
  selectedMenuItem: string = "";

  connectedCallback() {
    super.connectedCallback();
    this.applyDarkModePreference();
  }

  applyDarkModePreference() {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    const body = document.body;
    if (darkModeEnabled) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }

  render() {
    return html`
      <ul>
        <li>
          <slot name="random">Random Song</slot>
        </li>
        <li class="${this.selectedMenuItem === 'dark-mode' ? 'selected' : ''}">
          Dark Mode
          <button @click=${this._toggleDarkMode}>Toggle</button>
        </li>
        <slot></slot>
        <li @click=${this._handleSignOut.bind(this)}>
          <slot name="logout">Sign out</slot>
        </li>
      </ul>
    `;
  }
  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      margin-top: -15px;
      padding-left: 20px;
      z-index: 999; /* Ensure it's above other content */
      background-color: #ffd700;
      border-radius: 10px;
      box-shadow: 8px 0px 8px rgba(0, 0, 0, 0.2); /* Add a raised effect to the right border */
      width: 10%;
      height: 100%;
    }
    * {
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-text);
      border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: min-content;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: var(--line-weight-superfine);
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: right;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    button {
      /* Your existing styles */
      padding: 0.5em 0.5em;
      font-size: 1em; /* Example font size */
      border: 1px solid #ccc; /* Example border */
      border-radius: 10px; /* Example border radius */
      background-color: #f0f0f0; /* Example background color */
      color: #333; /* Example text color */
      cursor: pointer; /* Example cursor */
      transition: background-color 0.3s ease; /* Example transition */
    }
    
    button:hover {
      background-color: #ddd; /* Example hover background color */
    }
  `;

  _toggleDarkMode() {
    const darkModeEnabled = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkModeEnabled", darkModeEnabled ? "true" : "false");
  }

  _handleSignOut() {
    this.dispatchEvent(new CustomEvent("sign-out"));
  }
}