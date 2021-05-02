import {getUsername} from '../../utils/storage.js';
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const {pathname} = document.location;

const menuContainer = document.querySelector(".menu-container");

const username = getUsername();

let authLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;

if (username) {
    authLink = `<span class="nav-link" style="color: black;"> Looking good today, ${username}! </span>`;
}


menuContainer.innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<a class="navbar-brand" href="/">Products</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link ${pathname === "/" ? "active" : ""}" href="/">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
    ${authLink}
    </li>
    <form class="form-inline">
    <button class="btn btn-sm btn-outline-secondary" id="logout" type="button">Logout</button>
  </form>
  </ul>
</div>
</nav>`;

logoutButton();

}