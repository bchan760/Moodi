import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('title-comp')
export class TitleComponent extends LitElement {
    render() {
        return html`
            <div class="title-container">
                <h1 class="title" @click="${this.redirectToIndex}">
                    Moodi
                    <svg class="title-icon" @click="${this.redirectToIndex}">
                        <use href="../icons/mood.svg#icon-mood" />
                    </svg>
                </h1>
                <nav class="navbar">
                    <a href="/about">About Moodi</a>
                    <a href="/community">Community Suggestions</a>
                    <a href="/suggest">Random</a>
                </nav>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: fixed;
            justify-content: center; /* Center horizontally */
            width: 100%;
            background-color: rgb(255, 215, 0);
            z-index: 999; /* Ensure it's above other content */
            flex-grow: 1;
        }
        .title-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
            transform: translate(5%); /* Center it precisely */
            width: 100%;
            height: 100%;
        }
        .title {
            font-size: 64px;
            color: var(--color-text);
            display: flex;
            align-items: center;
            margin: 0;
            margin-top: 10px; /* Add margin to the top of the title */
        }
        .title-icon {
            height: 1.5em;
            width: 1.5em;
            fill: #FF9D72;
            margin-left: 5px; /* Add some spacing between title and icon */
        }
        .dark-mode .title {
            color: var(--color-text-light); /* Text and icon color in dark mode */
        }
        .navbar {
            margin-top: 5px; /* Adjust margin to create space between title and navbar */
        }
        .navbar a {
            color: var(--color-text);
            text-decoration: none; /* Remove underline */
            margin-right: 20px; /* Add space between links */
        }
    `;

    redirectToIndex() {
        window.location.href = "/moodi-app/";
    }
}
