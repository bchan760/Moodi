import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FormDataRequest } from "../rest";

@customElement("profile-edit")
export class ProfileEditElement extends LitElement {
  @property()
  path: string = "";

  render() {
    return html`
      <form @submit=${this._handleSubmit}>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>

        <label for="liked_songs">Liked Songs:</label><br>
        <textarea id="liked_songs" name="liked_songs"></textarea><br><br>

        <label for="num_liked_songs">Number of Liked Songs:</label><br>
        <input type="number" id="num_liked_songs" name="num_liked_songs" min="0"><br><br>

        <label for="profile_picture">Profile Picture:</label><br>
        <input type="file" id="profile_picture" name="profile_picture" accept="image/*"><br><br>

        <button type="submit">Save Changes</button>
        <button @click=${this._handleCancel}>Cancel</button>
      </form>
    `;
  }

  _handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);

    request.put(this.path);
  }

  _handleCancel() {
    // Redirect back to the user's profile page
    const userid = this.path.split("/")[3]; // Extract userid from the path
    window.location.href = `/app/profile/${userid}`;
  }
}
