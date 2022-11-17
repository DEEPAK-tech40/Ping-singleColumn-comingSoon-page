const emailEl = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const errorMsg = document.querySelector("#errorMsg");
const formEl = document.querySelector("form");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validate(event) {
  if (emailEl.value !== "" && emailEl.value.match(mailFormat)) {
    console.log("hi");
  } else {
    errorMsg.style.display = `block`;
    emailEl.style.border = `1px solid var(--LightRed)`;
    event.preventDefault();
  }
}

formEl.addEventListener("submit", validate);
emailEl.addEventListener("keydown", function () {
  errorMsg.style.display = `none`;
  emailEl.style.border = `1px solid var(--Gray)`;
});
