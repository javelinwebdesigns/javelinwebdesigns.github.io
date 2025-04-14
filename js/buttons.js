var buttons = document.querySelectorAll("button");

function click() {
  location.href = "https://javelinwebdesign.com/contact/";
}

buttons.forEach((button) => {
  if (button.innerHTML.includes("Get") || button.innerHTML.includes("Contact")) {
    button.addEventListener('click', click);
  }
});
