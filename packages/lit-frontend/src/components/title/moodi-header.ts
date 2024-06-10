import { css, html, LitElement, unsafeCSS } from "lit";
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../../rest";
import { authContext } from "../auth-required";
import { Profile } from "ts-models";
import "bootstrap/dist/js/bootstrap.js";
import bootstrap from "./node_modules/bootstrap/dist/css/bootstrap.css";


@customElement("moodi-header")
export class MoodiHeaderElement extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  static styles = bootstrap;

  render() {
    const { avatar, name, nickname, userid } = this.profile || {};

    const shortname =
      nickname || (name && name.split(" ")[0]) || this.user.username;

    // const authenticated = this.user.authenticated;
    // const welcome = authenticated
    //   ? html`
    //       <user-dropdown align="right" shortname=${shortname}>
    //         ${shortname}
    //         <user-panel slot="menu" avatar=${avatar} userid=${userid} @sign-out=${this._signOut}>
    //           <span slot="name">${name}</span>
    //         </user-panel>
    //       </user-dropdown>
    //     `
    //     : html`
    //     <auth-comp></auth-comp>
    // `;

      return html`
          <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
          <div class="container-xl">
            <!-- Logo -->
            <a class="navbar-brand" href="#">
              <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" class="h-8" alt="...">
            </a>
            <!-- Navbar toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <!-- Nav -->
              <div class="navbar-nav mx-lg-auto">
                <a class="nav-item nav-link active" href="#" aria-current="page">Home</a>
                <a class="nav-item nav-link" href="#">Product</a>
                <a class="nav-item nav-link" href="#">Features</a>
              </div>
              <!-- Right navigation -->
              <div class="navbar-nav ms-lg-4">
                <a class="nav-item nav-link" href="#">Sign in</a>
              </div>
              <!-- Action -->
              <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                <a href="#" class="btn btn-sm btn-primary w-full w-lg-auto">
                  Register
                </a>
              </div>
            </div>
          </div>
        </nav>
      `;
  }

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