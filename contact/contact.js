document.getElementById("enter-button").addEventListener("click", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name-box").value.trim();
    const email = document.getElementById("email-box").value.trim();
    const message = document.getElementById("message-box").value.trim();
    const responseDiv = document.getElementById("responseMessage");
    
    responseDiv.style.display = "none";
    responseDiv.className = "response-message";
    
    if (!name || !email || !message) {
        responseDiv.textContent = "⚠️ Please fill out all fields before submitting.";
        responseDiv.classList.add("error");
        responseDiv.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (res.ok) {
            responseDiv.textContent = "✅ " + data.message;
            responseDiv.classList.add("success");
            
            document.getElementById("name-box").value = "";
            document.getElementById("email-box").value = "";
            document.getElementById("message-box").value = "";
        } else {
            responseDiv.textContent = "❌ " + data.message;
            responseDiv.classList.add("error");
        }
    } catch (err) {
        responseDiv.textContent = "🚨 An unexpected error occurred: " + err.message;
        responseDiv.classList.add("error");
    }

    responseDiv.style.display = "block";
});

