console.log("Welcome to Javelin Web Design!");

const button = document.querySelector(".enter-button");
const nameBox = document.querySelector("#name-box");
const emailBox = document.querySelector("#email-box");
const messageBox = document.querySelector("#message-box");

function getCookie(name) {
    const decoded = decodeURIComponent(document.cookie);
    const array = decoded.split(",");
    let result = null;

    array.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    })

    return result;
}

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 *1000));

    let expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function sendMessage() {
    if (emailBox.value === "" || nameBox.value === "" || messageBox.value === "") {
        alert("Please fill out empty inputs.");
        return
    }

    if (getCookie("canMessage") !== null) {
        alert("Please wait 24 hours before sending another message.");
        return
    }

    const webhookUrl = "https://discordapp.com/api/webhooks/1295690344482209792/1MkSbSIhBT7fTgg0-JtNEqaphJLW8dijdic3Hpuo7-x_Ym9dEIp2pQMO6oqY9ZZt82HE";
    const message = {
        embeds: [
            {
                title: nameBox.value,
                description: `Email: ${emailBox.value}; Message: ${messageBox.value}`
            }
        ]
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    const payload = JSON.stringify(message);
    xhr.send(payload);

    alert("Message successfully sent. We will get back to you as soon as possible!");
    setCookie("canMessage", false, 1)
}

button.addEventListener('click', sendMessage)
