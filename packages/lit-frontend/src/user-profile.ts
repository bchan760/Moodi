import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    render() {
      const {
        userid,
        name,
        liked_songs = [],
        num_liked_songs,
      } = (this.profile || {}) as Profile;
    
      return html`
        <section>
          ${this._renderAvatar()}
          <a href="./${userid}/edit">Edit</a>
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
        const { name, nickname, avatar } = (this.profile ||
          {}) as Profile;
        const avatarImg = avatar
          ? html`<img id="avatarImg" src="${avatar}" />`
          : (nickname || name || " ");
        return html` 
        <div class="avatar">
          ${avatarImg}
        </div>`;
      }

    // static styles = css`...`;

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.profile = json as Profile;
        })
    }

    connectedCallback() {
        if (this.path) {
          this._fetchData(this.path);
        }
        super.connectedCallback();
    }

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



@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    const {
      userid,
      name,
      nickname,
    } = (this.profile || {}) as Profile;

    return html`
      <form @submit=${this._handleSubmit}>
        <dl>
            <dt>Username</dt>
            <dd>
              <input name="userid" disabled .value=${userid}/>
            </dd>
            <dt>Avatar</dt>
            <dd>
              <input
                  name="avatar"
                  type="file"
                  @change=${this._handleAvatarSelected}
              />
            </dd>
            <dd>${this._renderAvatar()}</dd>
            <dt>Name</dt>
            <dd>
              <input name="name" .value=${name} />
            </dd>
            <dt>Nickname</dt>
            <dd>
              <input name="nickname" .value=${nickname}/>
            </dd>
          </dl>
        <button type="submit">Submit</button>
    </form> `;
  }

  // static styles = [...UserProfileElement.styles, css`...`];

  _handleAvatarSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];
    const reader: Promise<string> = new Promise(
      (resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (err) => reject(err);
        fr.readAsDataURL(selectedFile);
      }
    );

    reader.then((result: string) => {
      this.profile = {
        ...(this.profile as Profile),
        avatar : result
      };
    });
  }

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "airports"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
    const json = Object.fromEntries(entries);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }
}