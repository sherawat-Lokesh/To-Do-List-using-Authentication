import { username, password, signIn, showDate } from "./dom.js";

const data = [];

signIn.addEventListener("click", function (e) {
  if (!username.value) return;
  if (!password.value) return;
  console.log(e.target);
  window.open("/to-do-app.html", "_self");

  console.log(username.value, password.value);
});
