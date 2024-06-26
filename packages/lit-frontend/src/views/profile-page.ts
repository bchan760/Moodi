import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { authContext } from "../components/auth-required";
import { APIUser, APIRequest } from "../rest";
import * as App from "../app";
import "../components/user-profile";
import "../components/profile-edit";
import "/src/styles/page.css";

type ProfileLocation = Location & {
  params: { userid: string };
};

@customElement("profile-page")
export class ProfilePageElement extends App.View {

  
  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();


  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    return this.location?.params.userid;
  }

  @property({ reflect: true })
  get edit(): boolean {
    if (this.location) {
      const params = new URL(document.location.toString())
        .searchParams;
      return params.has("edit");
    }
    return false;
  }

  @property()
  get profile() {
    return this.getFromModel("profile");
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("This is the user", this.user);
    // this.dispatchMessage({ type: "ProfilePageConnected" });
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (
      name === "userid" &&
      oldValue !== newValue &&
      newValue
    ) {
      console.log("Profile Page:", newValue);
      this.dispatchMessage({
        type: "ProfileSelected",
        userid: newValue
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  toggleEdit() {
    const url = new URL(document.location.toString());
    const params = new URLSearchParams(url.search);
    params.set("edit", "true");
    url.search = params.toString();
    window.history.replaceState({}, '', url.toString()); // Update the URL without reloading the page
    this.requestUpdate(); // Trigger a re-render to reflect the change
  }

  render() {
    return html`
      <main class="page">
        <div class="center-box">
          ${this.edit
            ? html`
                <profile-edit .path=${this.location?.pathname}>
                </profile-edit>
              `
            : html`
                <user-profile .user=${this.user}>
                </user-profile>
                <button @click=${this.toggleEdit}>Edit Profile</button>
              `}
        </div>
      </main>
    `;
  }

  static styles = css`
    .page {
      position: relative; /* Set position to relative */
      height: 100vh; /* Set height to full viewport height */
    }

    .center-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #000;
      padding: 20px;
      border-radius: 10px;
      max-width: 80%;
      max-height: 80%;
      overflow: auto;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  `;
}
