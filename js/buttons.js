var buttons = document.querySelectorAll("button");

function click() {
  location.href = "https://javelinwebdesign.com/contact/";
}

buttons.forEach((button) => {
  if (button.innerHtml.includes("Get") || button.innerHtml.includes("Contact")) {
    button.addEventListener('click', click);
  }
});
