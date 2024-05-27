import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('title-header')
export class TitleHeader extends LitElement {
    static styles = css`
        .title-container {
            text-align: center;
        }
        .title {
            display: flex;
            align-items: center;
            font-size: 2rem;
            cursor: pointer;
        }
        .title-icon {
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    `;

    render() {
        return html`
            <div class="title-container">
                <div class="title" @click="${this.redirectToIndex}">
                    <h1 class="title-text">
                        Moodi
                    </h1>  
                    <svg class="title-icon" viewBox="0 0 83.05 103.8125">
                        <path d="M41.53,83.05A41.53,41.53,0,1,1,53.87,1.87a2,2,0,1,1-1.18,3.82A37.53,37.53,0,1,0,79.05,41.53a37.15,37.15,0,0,0-7.84-23,2,2,0,1,1,3.17-2.45,41.16,41.16,0,0,1,8.67,25.41A41.57,41.57,0,0,1,41.53,83.05Z"/>
                        <path d="M41.53,67.39A12.9,12.9,0,0,1,28.64,54.5a2,2,0,0,1,2-2H52.42a2,2,0,0,1,2,2A12.91,12.91,0,0,1,41.53,67.39ZM32.86,56.5a8.89,8.89,0,0,0,17.33,0Z"/>
                        <path d="M28.37,48.6a2,2,0,0,1-2-2,3.07,3.07,0,0,0-6.14,0,2,2,0,0,1-4,0,7.07,7.07,0,0,1,14.14,0A2,2,0,0,1,28.37,48.6Z"/>
                        <path d="M64.82,48.6a2,2,0,0,1-2-2,3.07,3.07,0,1,0-6.14,0,2,2,0,0,1-4,0,7.07,7.07,0,1,1,14.14,0A2,2,0,0,1,64.82,48.6Z"/>
                    </svg>
                </div>
            </div>
        `;
    }

    redirectToIndex() {
        window.location.href = '/';
    }
}
