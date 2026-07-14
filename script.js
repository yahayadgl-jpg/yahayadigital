function sendMessage() {

    let input = document.getElementById("message");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    let reply = "";

    if (message.toLowerCase().includes("python")) {
        reply = "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.";
    }
    else if (message.toLowerCase().includes("ai")) {
        reply = "AI yana taimakawa mutane su warware matsaloli.";
    }
    else if (message.toLowerCase().includes("nexora")) {
        reply = "NEXORA AI tana da manufar taimaka wa mutane su samu ilimi da mafita.";
    }
    else {
        reply = "Na gode da saƙonka. Har yanzu ina koyo, amma zan ci gaba da inganta amsoshina.";
    }

    let chat = document.getElementById("chat");

    chat.innerHTML += `
        <hr>

        <p><strong>Kai:</strong> ${message}</p>

        <p><strong>NEXORA AI:</strong> ${reply}</p>
    `;

    input.value = "";

    input.focus();
}
