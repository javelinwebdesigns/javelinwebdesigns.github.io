const preloaderContainer = document.querySelector(".preloader-container");
const container = document.querySelector(".container");

container.style.display = "none";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hidePreloader() {
    await sleep(4000);
    preloaderContainer.style.opacity = "0";
    container.style.display = "block";
    await sleep(1000);
    preloaderContainer.style.display = "none";
}

hidePreloader();
