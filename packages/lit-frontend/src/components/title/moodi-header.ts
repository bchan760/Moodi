import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { APIUser, APIRequest } from '../../rest';
import { authContext } from '../auth-required';
import { Profile } from 'ts-models';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap CSS as a string
// import bootstrapCss from './node_modules/bootstrap/dist/css/bootstrap.min.css';

@customElement('moodi-header')
export class MoodiHeaderElement extends LitElement {
  @state() profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false }) user = new APIUser();

  render() {
    const { avatar, name, nickname, userid } = this.profile || {};
    const shortname = nickname || (name && name.split(' ')[0]) || this.user.username;

    return html`
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
        <div class="container-xl">
          <a class="navbar-brand" href="#">
            <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" class="h-8" alt="...">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-lg-auto">
              <a class="nav-item nav-link active" href="#" aria-current="page">Home</a>
              <a class="nav-item nav-link" href="#">Product</a>
              <a class="nav-item nav-link" href="#">Features</a>
            </div>
            <div class="navbar-nav ms-lg-4">
              <a class="nav-item nav-link" href="#">Sign in</a>
            </div>
            <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
              <a href="#" class="btn btn-sm btn-primary w-full w-lg-auto">Register</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  updated(changedProperties: Map<string, unknown>) {
    console.log('Profile Data has been updated', changedProperties);
    if (changedProperties.has('user')) {
      console.log('New user', this.user);
      const { username } = this.user;
      this._getData(`/profiles/${username}`);
    }
    return true;
  }

  _getData(path: string) {
    const request = new APIRequest();
    request.get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log('Profile:', json);
        this.profile = json as Profile;
      });
  }

  _signOut() {
    console.log('Signout');
    this.user.signOut();
  }
}
