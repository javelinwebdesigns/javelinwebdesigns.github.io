var preloaderContainer = document.querySelector(".preloader-container");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hidePreloader() {
    await sleep(4000);
    preloaderContainer.style.opacity = "0";
    await sleep(1000);
    preloaderContainer.style.display = "none";
}

hidePreloader();

