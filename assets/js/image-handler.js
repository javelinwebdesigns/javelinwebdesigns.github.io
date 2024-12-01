var image = document.getElementById("image");
var imageIndex = 1;
var imageAmount = 5;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function loop() {
    while (true) {
        if (imageIndex !== imageAmount) {
            imageIndex++
            image.src = `assets/img/${imageIndex}.png`
            //image.style.transform = `rotate(${Math.floor((Math.random() * -5) + Math.random() * 5)}deg)`
        } else {
            imageIndex = 1;
            image.src = "assets/img/1.png"
            //image.style.transform = `rotate(${Math.floor((Math.random() * -5) + Math.random() * 5)}deg)`
        }
    
        await sleep(5000)
    } 
}

loop()
