import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./title_header.ts";



@customElement('title-wrapper')
export class TitleComponent extends LitElement {
    render() {
        return html`
            <div class="title-container">
                <title-header></title-header>
                <nav class="navbar">
                    <a href="/about">About Moodi</a>
                    <a href="/community">Community Suggestions</a>
                    <a href="/suggest">Random</a>
                </nav>
            </div>
        `;
    }
    // render() {
    //     return html`
    //         <div class="title-container">
    //             <h1 class="title" @click="${this.redirectToIndex}">
    //                 Moodi
    //             </h1>
    //             <svg class="title-icon" viewBox="0 0 83.05 103.8125" @click="${this.redirectToIndex}">
    //                 <path d="M41.53,83.05A41.53,41.53,0,1,1,53.87,1.87a2,2,0,1,1-1.18,3.82A37.53,37.53,0,1,0,79.05,41.53a37.15,37.15,0,0,0-7.84-23,2,2,0,1,1,3.17-2.45,41.16,41.16,0,0,1,8.67,25.41A41.57,41.57,0,0,1,41.53,83.05Z"/><path d="M41.53,67.39A12.9,12.9,0,0,1,28.64,54.5a2,2,0,0,1,2-2H52.42a2,2,0,0,1,2,2A12.91,12.91,0,0,1,41.53,67.39ZM32.86,56.5a8.89,8.89,0,0,0,17.33,0Z"/>
    //                 <path d="M28.37,48.6a2,2,0,0,1-2-2,3.07,3.07,0,0,0-6.14,0,2,2,0,0,1-4,0,7.07,7.07,0,0,1,14.14,0A2,2,0,0,1,28.37,48.6Z"/>
    //                 <path d="M64.82,48.6a2,2,0,0,1-2-2,3.07,3.07,0,1,0-6.14,0,2,2,0,0,1-4,0,7.07,7.07,0,1,1,14.14,0A2,2,0,0,1,64.82,48.6Z"/>
    //             </svg>
    //             <nav class="navbar">
    //                 <a href="/about">About Moodi</a>
    //                 <a href="/community">Community Suggestions</a>
    //                 <a href="/suggest">Random</a>
    //             </nav>
    //         </div>
    //     `;
    // }

    // static styles = css`
    //     :host {
    //         display: fixed;
    //         justify-content: center; /* Center horizontally */
    //         width: 100%;
    //         background-color: rgb(255, 215, 0);
    //         z-index: 999; /* Ensure it's above other content */
    //         flex-grow: 1;
    //     }
    //     .title-container {
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //         padding: 10px 0;
    //         transform: translate(5%); /* Center it precisely */
    //         width: 100%;
    //         height: 100%;
    //     }
    //     .title {
    //         font-size: 64px;
    //         color: var(--color-text);
    //         display: flex;
    //         align-items: center;
    //         margin: 0;
    //         margin-top: 10px; /* Add margin to the top of the title */
    //     }
    //     .title-icon {
    //         height: 1.5em;
    //         width: 1.5em;
    //         fill: #FF9D72;
    //         margin-left: 5px; /* Add some spacing between title and icon */
    //     }
    //     .dark-mode .title {
    //         color: var(--color-text-light); /* Text and icon color in dark mode */
    //     }
    //     .navbar {
    //         margin-top: 5px; /* Adjust margin to create space between title and navbar */
    //     }
    //     .navbar a {
    //         color: var(--color-text);
    //         text-decoration: none; /* Remove underline */
    //         margin-right: 20px; /* Add space between links */
    //     }
    // `;

    redirectToIndex() {
        window.location.href = "/moodi-app/";
    }
}
