import { html } from "lit";
import { customElement } from "lit/decorators.js";
// MVU app
import * as App from "../app";
import routes from "../routes";
import update from "../update";
// components
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/title/moodi-header";
// import "../components/moodi-body";

@customElement("moodi-app")
export class MoodiAppElement extends App.Main {
  constructor() {
    super(update);
  }

  // <auth-required>
  //       <moodi-header></moodi-header>
  //       <vaadin-router .routes=${routes}> </vaadin-router>
  // </auth-required>

  render() {
    return html`
        <moodi-header></moodi-header>
        <moodi-body></moodi-body>
        <vaadin-router .routes=${routes}> </vaadin-router>
    `;
  }
}