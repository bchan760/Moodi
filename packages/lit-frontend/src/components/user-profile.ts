import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { APIUser, APIRequest } from "../rest";
import { Profile } from "../models/profile";
import { JSONRequest } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @property({ type: String })
  userid: string = "";

  @state()
  profile?: Profile;

  @property()
  user: string = "";

  connectedCallback() {
    super.connectedCallback();
    console.log("This is the user", this.user);
    this.path = `/profile/${this.user}`;
    this._getData(this.path);
    this.requestUpdate();
  }

  render() {
    const { userid, name, liked_songs = [], num_liked_songs } = (this.profile || {}) as Profile;
    console.log("Username:", this.user);
    return html`
      <section>
        ${this._renderAvatar()}
        <h1>${name}</h1>
        <dl>
          <dt>Username</dt>
          <dd>${userid}</dd>
          <dt>Liked Songs</dt>
          <dd>${liked_songs}</dd>
          <dt>Number of Liked Songs</dt>
          <dd>${num_liked_songs}</dd>
        </dl>
      </section>
    `;
  }

  _renderAvatar() {
    const { name, nickname, avatar } = (this.profile || {}) as Profile;
    const avatarImg = avatar
      ? html`<img id="avatarImg" src="${avatar}" />`
      : nickname || name || " ";
    return html`
      <div class="avatar">
        ${avatarImg}
      </div>
    `;
  }

  _fetchData(path: string) {
    const jsonRequest = new JSONRequest(undefined);
    const url = jsonRequest._url(path);
    console.log("URL:", url);
  
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          console.log("Response:", response);
          return response.json();
        } else {
          console.log("Response status", response.status);
          return null;
        }
      })
      .then((json) => {
        if (json) {
          console.log("Profile:", json);
          this.profile = json as Profile;
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  
  

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          console.log("User-profile Response:", response.json());
          return response.json();
        }
        else{
          console.log("Response status", response.status);
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("User-profile Profile:", json);
        this.profile = json as Profile;
      });
  }

  // connectedCallback() {
  //   if (this.path) {
  //     this._fetchData(this.path);
  //   }
  //   super.connectedCallback();
  // }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}