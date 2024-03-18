import { css, html, LitElement, unsafeCSS } from "lit";
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-required";
import { Profile } from "ts-models";
import "/src/styles/page.css";
import "./drop-down";
import "./user-panel";
import "./side-panel";
import "./title-comp";
import "./user-dropdown";

@customElement("moodi-header")
export class MoodiHeaderElement extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    const { avatar, name, nickname, userid } =
      this.profile || {};
    const shortname =
      nickname ||
      (name && name.split(" ")[0]) ||
      this.user.username;
    const authenticated = this.user.authenticated;
    const welcome = authenticated
      ? html`
          <user-dropdown align="right" shortname=${shortname}>
            ${shortname}
            <user-panel slot="menu" avatar=${avatar} userid=${userid} @sign-out=${this._signOut}>
              <span slot="name">${name}</span>
            </user-panel>
          </user-dropdown >
        `
      : "Not logged in";

      return html`
      <header>
        <title-comp></title-comp>
        <drop-down align="left">
          <svg class="icon" slot="icon">
            <use href="/icons/hamburger.svg#icon-hamburger" />
          </svg>
          <side-panel slot="menu" @sign-out=${this._signOut}></side-panel>
        </drop-down>
        ${welcome}
      </header>
    `;
  }

  static styles = [
    css`
      header {
        grid-area: header;
        display: flex;
        align-items: center;
      }
      .icon {
        width: 96px;
        height: 96px;
        fill: #FF9D72;
        margin: 36px;
      }
      [slot="logout"] a {
        color: var(--color-accent);
        cursor: pointer;
        font-weight: var(--font-weight-bold);
      }
    `
  ];

  updated(changedProperties: Map<string, unknown>) {
    console.log(
      "Profile Data has been updated",
      changedProperties
    );
    if (changedProperties.has("user")) {
      console.log("New user", this.user);
      const { username } = this.user;
      this._getData(`/profiles/${username}`);
    }
    return true;
  }

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Profile:", json);
        this.profile = json as Profile;
      });
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}