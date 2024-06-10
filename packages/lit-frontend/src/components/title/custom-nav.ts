import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('custom-nav')
export class NavBar extends LitElement {
    static styles = css`
        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .navbar a {
            margin: 0 1rem;
            text-decoration: none;
            color: inherit;
            font-weight: bold;
        }
    `;

    render() {
        return html`
            <nav class="navbar">
                <a href="/about">About Moodi</a>
                <a href="/community">Community Suggestions</a>
                <a href="/suggest">Random</a>
            </nav>
        `;
    }

    redirectToIndex() {
        window.location.href = '/';
    }
}
