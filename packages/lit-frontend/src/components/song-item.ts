import { LitElement, html, css } from 'lit';
import { customElement, property } from "lit/decorators.js";

@customElement("song-item")
export class SongItemElement extends LitElement {
    @property({ type: String })
    href: string = "platform.html";

    @property({ type: String, attribute: 'src' }) 
    imageSrc: string = "";

    @property({ type: String })
    title: string = "";

    render() {
        return html`
            <li class="song-item">
                <a href=${this.href}>
                    <img src=${this.imageSrc} alt=${this.title} class="song-image">
                </a>
                <a href=${this.href} class="title-link">${this.title}</a>
            </li>
        `;
    }

    static styles = css`
        .song-item {
            display: inline-block;
            margin-right: 100px; 
            font-size: 18px;
            list-style: none; 
            text-align: center; 
        }

        .song-image {
            width: 100%; 
            max-width: 400px;
            height: auto;
            max-height: 400px;
            object-fit: cover;
            border: 2px solid #FF9D72;
        }

        .title-link {
            display: block; /* Ensure title appears on a new line */
            margin-top: 10px;
            text-decoration: none;
            color: var(--color-text);
        }

        .dark-mode .title-link {
            color: var(--color-text-light); /* Text color in dark mode */
        }
    `;
}
