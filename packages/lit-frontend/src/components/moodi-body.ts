import { css, html, LitElement, unsafeCSS } from "lit";
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import "/src/styles/page.css";
import "./song-item";
import "./song-container";

@customElement("moodi-body")
export class MoodiBodyElement extends LitElement {
    render() {
        return html`
            <section class="centered-section">
                <h2>How are you feeling?</h2>
                <form action="suggest.html" method="get">
                    <input type="text" id="userInput" name="userInput" placeholder="Type how you're feeling here"/>
                    <button type="submit" id="submit">Submit</button>
                </form>
                
                <song-container>
                    <h2 slot="title">Here's some popular song suggestions for today!</h2>
                    <song-item href="platform.html" src="/images/circles_post_malone.jpg" title="Circles by Post Malone"></song-item>
                    <song-item href="platform.html" src="/images/die_for_you_the_weeknd.jpg" title="Die for You by The Weeknd"></song-item>
                    <song-item href="platform.html" src="/images/one_dance_drake.jpg" title="One Dance by Drake"></song-item>
                </song-container>           
            </section>

            <footer>
                <p id="contact">Contact me at bchan36@calpoly.edu for inquiries.</p>
            </footer>
        `;
    }

    static styles = css`
        footer {
            text-align: center; 
            margin-top: 20px; /* Add some space between the section and footer */
        }

        .centered-section {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center horizontally */
            height: 100vh; /* Make the section fill the entire viewport height */
            transform: translateX; /* Center the section */
        }
    `;
}
