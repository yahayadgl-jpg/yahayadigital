let chatHistory = [];

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
        reply = "NEXORA AI tana da manufar taimaka wa mutane su samu mafita da ilimi.";
    }
    else {
        reply = "Na gode da saƙonka. Zan ci gaba da koyo domin in fi taimaka maka.";
    }

    chatHistory.push({
        user: message,
        ai: reply
    });

    let html = "";

    for (let chat of chatHistory) {

        html += `
        <hr>

        <p><strong>Kai:</strong> ${chat.user}</p>

        <p><strong>NEXORA AI:</strong> ${chat.ai}</p>
        `;
    }

    document.getElementById("chat").innerHTML = html;

    input.value = "";
    input.focus();

}
