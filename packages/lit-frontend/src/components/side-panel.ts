import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch";
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
          <slot name="about">About Moodi</slot>
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
      width: 15%;
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
    img {
      display: inline;
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px; /* spacing between image and text */
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: left;
    }
    .selected {
      border: 2px solid red; /* Define your highlighted border style */
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