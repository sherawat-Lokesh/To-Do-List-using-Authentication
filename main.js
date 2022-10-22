import { username, password, signIn, showDate, userData } from "./dom.js";

signIn.addEventListener("click", function (e) {
  if (!username.value) return;
  if (!password.value) return;
  const userObj = {
    username: username.value,
    userPassword: password.value,
  };

  localStorage.setItem("data", JSON.stringify(userObj));

  console.log(e.target);
  window.open("/to-do-app.html", "_self");

  console.log(username.value, password.value);
});
