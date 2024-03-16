import { LitElement, html, css } from 'lit';
import { customElement } from "lit/decorators.js";

@customElement("song-container")
export class SongContainerElement extends LitElement {
    render() {
        return html`
            <div class="song-container">
                <ul class="song-list">
                    <li><slot></slot></li>
                </ul>
            </div>
        `;
    }

    static styles = css`
        .song-container {
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: flex-start; /* Align items at the start of the cross axis */
            margin-top: 20px; /* Add some space above the container */
            padding-bottom: 50px; /* Add padding to the bottom to prevent overlap with the footer */
            width: 100%; /* Occupy full width of the viewport */
            box-sizing: border-box; /* Include padding in the width calculation */
        }
        
        .song-list {
            list-style: none; /* Remove default list styling */
        }
        
        .song-item {
            margin-bottom: 20px; /* Add margin to the bottom of each song item */
        }
    
    `;
}
