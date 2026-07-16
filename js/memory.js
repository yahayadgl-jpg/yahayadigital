// ===============================
// NEXORA AI Memory System V4
// ===============================

// Save Chat
function saveChat() {

    localStorage.setItem(
        "nexora_chat",
        JSON.stringify(chatHistory)
    );

}

// Load Chat
function loadChat() {

    const saved = localStorage.getItem("nexora_chat");

    if (saved) {

        chatHistory = JSON.parse(saved);

        renderChat();

    } else {

        clearChat();

    }

}

// Clear Chat
function clearChat() {

    chatHistory = [];

    localStorage.removeItem("nexora_chat");

    document.getElementById("chat").innerHTML = `
        <div class="ai-message">

            <strong>NEXORA AI</strong><br>

            Assalamu Alaikum.<br>

            Barka da zuwa Day One.<br><br>

            Na samu mafita.<br>

            Na samu malami.

        </div>
    `;

}
