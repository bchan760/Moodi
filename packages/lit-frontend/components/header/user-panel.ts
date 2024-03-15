import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile-panel")
export class UserProfilePanelElement extends LitElement {
  @property({ type: String }) textColor = "#121212"; // Default text color

  // Function to handle click on list items
  handleItemClick(action: string) {
    switch (action) {
      case "liked-songs":
        // Redirect to liked songs path
        window.location.href = "/app/liked-songs";
        break;
      case "settings":
        // Redirect to settings path
        window.location.href = "/app/settings";
        break;
      case "sign-in":
        // Perform sign out action
        // Add your sign out logic here
        break;
    }
  }

  render() {
    return html`
      <ul>
        <!-- Add click event listeners and pass action to the handler function -->
        <li @click="${() => this.handleItemClick('liked-songs')}">Liked Songs</li>
        <li @click="${() => this.handleItemClick('settings')}">Settings</li>
        <li @click="${() => this.handleItemClick('sign-in')}">Sign in</li>
      </ul>
    `;
  }

  static styles = css`
    :host {
      background-color: #ffd700;
      border-radius: 10px;
      padding: 10px;
      position: relative;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Align text to the left */
    }

    li {
      position: relative;
      padding: 5px 0;
      color: var(--color-text-light);
      cursor: pointer;
    }

    li::before {
      content: "";
      position: absolute;
      top: 100%; 
      left: 0;
      width: 100%; 
      height: 3px;
      background-color: #FF9D72;
    }

    li:last-child::before {
      display: none;
    }
  `;
}