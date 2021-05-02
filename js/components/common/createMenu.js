import {getUsername} from '../../utils/storage.js';
import logoutButton from "./logoutButton.js";


export default function createMenu() {
    const {pathname} = document.location;

const menuContainer = document.querySelector(".menu-container");

const username = getUsername();

let authLink = `<a class="nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html">Login</a>`;

if (username) {
    authLink = `<button style="display:inline-block;" id="logout" type="button">Logout</button>`;
  }

let welcomeMessage = "";

if (username){
welcomeMessage = `<div>Looking good today, <span class="capitalize"> ${username}</span>!</div>`;
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
    <div id="welcomeMessage">${welcomeMessage}</div>
    </li>
    <li class="nav-item">
    <div id="logoutBtnContainer"> ${authLink}</div>
    </li>
   
  </ul>
</div>
</nav>`;

logoutButton();

}