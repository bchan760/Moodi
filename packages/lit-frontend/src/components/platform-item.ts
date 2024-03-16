import { LitElement, html, css } from 'lit';
import { customElement, property } from "lit/decorators.js";

@customElement("platform-item")
export class PlatformItemElement extends LitElement {
    @property({ type: String })
    href: string = "playlist.html";

    @property({ type: String })
    imageSrc: string = "";

    @property({ type: String })
    title: string = "";

    render() {
        return html`
            <li class="platform-item">
                <a href=${this.href}>
                    <img src=${this.imageSrc} alt=${this.title} width="300" height="300">
                </a>
                <span>${this.title}</span>
            </li>
        `;
    }

    static styles = css`
        .platform-item {
            display: inline-block;
            margin-right: 20px;
            text-align: center;
            font-size: 18px;
        }

        .platform-item img {
            display: block;
            width: 300px;
            height: 300px;
            object-fit: cover;
        }
    `;
}
