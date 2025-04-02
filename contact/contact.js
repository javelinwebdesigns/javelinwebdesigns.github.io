console.log("Hello There");

var nameBox = document.querySelector("#name-box");
var emailBox = document.querySelector("#email-box");
var messageBox = document.querySelector("#message-box");
var enterButton = document.querySelector(".enter-button")

async function sendRequest(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.status === 204 || response.status === 200) { 
            alert("Thank you for contacting us, we will get back to you as soon as possible.");
            return;
        }


        if (!response.ok) {
            alert("Something went wrong on our end. Sorry about that.");
            throw new Error("HTTP Error!");
        }

        const result = await response.json();
        alert("Thank you for contacting us, we will get back to you as soon as possible.");
        return result
    } catch(error) {
        alert("Something went wrong on our end. Sorry about that.");
    }
};

function enter() {
    var name = nameBox.value;
    var email = emailBox.value;
    var message = messageBox.value;

    const unsafeChars = /[<>\"'`;()=+&|']/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/
    if (unsafeChars.test(name) || unsafeChars.test(email) || unsafeChars.test(message)) {
        alert("Un-supported characters used.");
        return;
    }

    if (name == "" || email == "" || message == "") {
        alert("Some field is incomplete.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        return;
    }

    const url = "https://unified-early-ox.ngrok-free.app/";
    const data = {
        name: name,
        email: email,
        message: message
    };
    
    sendRequest(url, data);
}

enterButton.addEventListener('click', enter);
