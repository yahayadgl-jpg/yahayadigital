// =====================================
// NEXORA AI Memory System
// Version 4.1
// =====================================

// Save chat to browser
function saveMemory() {

    localStorage.setItem(
        "nexora_chat",
        JSON.stringify(chatHistory)
    );

}

// Load chat from browser
function loadMemory() {

    const data = localStorage.getItem("nexora_chat");

    if (data) {

        chatHistory = JSON.parse(data);

        let html = "";

        for (const chat of chatHistory) {

            html += `
<div class="user-message">
<strong>Kai:</strong><br>
${chat.user}
<br><small>${chat.time}</small>
</div>

<div class="ai-message">
<strong>NEXORA AI:</strong><br>
${chat.ai}
<br><small>${chat.time}</small>
</div>
`;
        }

        document.getElementById("chat").innerHTML = html;

    }

}

// Delete saved memory
function clearMemory() {

    localStorage.removeItem("nexora_chat");

}
