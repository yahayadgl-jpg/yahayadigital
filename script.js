function sendMessage() {

    let message = document.getElementById("message").value.toLowerCase();
    let reply = "";

    if (message.includes("python")) {
        reply = "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.";
    }

    else if (message.includes("ai")) {
        reply = "AI yana taimakawa mutane su warware matsaloli cikin sauri da hikima.";
    }

    else if (message.includes("nexora")) {
        reply = "NEXORA AI an gina ta domin taimaka wa mutane su samu mafita da ilimi.";
    }

    else {
        reply = "Na karɓi saƙonka. Zan ci gaba da koyo domin in fi taimaka maka.";
    }

    document.getElementById("chat").innerHTML += `
        <p><b>Kai:</b> ${message}</p>

        <p><b>NEXORA AI:</b> ${reply}</p>
    `;

    document.getElementById("message").value = "";
}
