var buttons = document.querySelectorAll("button");

function click(url) {
    window.open(url);
}

buttons[0].addEventListener('click', () => {
    click("https://github.com/MiniSowgro");
});

buttons[1].addEventListener('click', () => {
    click("https://github.com/NotEvanH");
});
