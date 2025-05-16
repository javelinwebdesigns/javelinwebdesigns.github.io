var buttons = document.querySelectorAll("button");

function click() {
  location.href = "https://javelinwebdesign.com/contact/";
}

function clickTwo() {
  location.href = "https://javelinwebdesign.com/about/";
}

buttons.forEach((button) => {
  if (button.innerHTML.includes("Get") || button.innerHTML.includes("Contact")) {
    button.addEventListener('click', click);
  } else if (button.innerHTML.includes("About")) {
    button.addEventListener('click', clickTwo);
  }
});
