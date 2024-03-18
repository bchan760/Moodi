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
          <section>
            <h2>How are you feeling?</h2>
            <form action="suggest.html" method="get">
              <input
                type="text"
                id="userInput"
                name="userInput"
                placeholder="Type how you're feeling here"
              />
              <button type="submit" id="submit">Submit</button>
            </form>
    
            <h2>Here's some popular song suggestions for today!</h2>
            <song-container>
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

  static styles = [
    css`
      main {
        padding: 1rem;
      }
    `,
  ];
}