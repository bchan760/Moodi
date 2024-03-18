import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "../components/auth-required";
import { Profile } from "../models/profile";
import { JSONRequest } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  @property()
  path: string = "";

  @property({ type: String })
  userid: string = "";

  @state()
  profile?: Profile;

  connectedCallback() {
    super.connectedCallback();
    console.log("This is the user", this.user);
    this.path = `/profiles/${this.user.username}`;
    this._getData(this.path);
    // console.log("User-profile content:", this._getData(this.path));
    this.requestUpdate();
  }

  render() {
    const { userid, name, liked_songs = [], num_liked_songs } = (this.profile || {}) as Profile;
    console.log("Updated Username:", this.user);
    return html`
      <section>
        ${this._renderAvatar()}
        <h1>${name}</h1>
        <dl>
          <div class="row">
            <dt>Username:</dt>
            <dd>${userid}</dd>
          </div>
          <div class="row">
            <dt>Liked Songs: </dt>
            <dd>${liked_songs}</dd>
          </div>
          <div class="row">
            <dt>Number of Liked Songs:</dt>
            <dd>${num_liked_songs}</dd>
          </div>
        </dl>
      </section>
    `;
  }

  _renderAvatar() {
    const { avatar } = (this.profile || {}) as Profile;
    const avatarImg = avatar
      ? html`<img id="avatarImg" src="${avatar}" />`
      : null;
    return html`
      <div class="avatar">
        ${avatarImg}
      </div>
    `;
  }

  static styles = css`
    .row {
      display: flex;
    }
    
    dt, dd {
      display: inline-block;
      margin: 0;
    }
  `;
  // _fetchData(path: string) {
  //   const jsonRequest = new JSONRequest(undefined);
  //   const url = jsonRequest._url(path);
  //   console.log("user-profile URL:", url);
  
  //   fetch(url)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log("Response:", response);
  //         return response.json();
  //       } else {
  //         console.log("Response status", response.status);
  //         return null;
  //       }
  //     })
  //     .then((json) => {
  //       if (json) {
  //         console.log("Profile:", json);
  //         this.profile = json as Profile;
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // }
  
  

  _getData(path: string) {
    const request = new APIRequest();
  
    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json(); // Return the promise returned by response.json()
        } else {
          console.log("User-profile Response status", response.status);
          throw new Error("Failed to fetch profile data"); // Throw an error if response status is not 200
        }
      })
      .then((json: unknown) => {
        console.log("User-profile Profile:", json); // Log the resolved value of the promise
        this.profile = json as Profile;
      })
      .catch((error: Error) => {
        console.error("Error fetching profile data:", error.message); // Log any errors that occur during the fetch
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
      this._getData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}