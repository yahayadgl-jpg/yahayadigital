// ======================================
// NEXORA AI
// Founder: Yahaya Bello
// Version 3.0
// ======================================

// Founder Information
const founder = {
    name: "Yahaya Bello",
    company: "NEXORA AI",
    country: "Nigeria",
    motto: "Na samu mafita. Na samu malami."
};

// Knowledge Base
const knowledge = {
    "python": "Python yare ne mai sauƙin koya kuma yana da amfani wajen gina AI.",
    "ai": "Artificial Intelligence yana taimakawa wajen warware matsaloli.",
    "html": "HTML yana gina tsarin shafin yanar gizo.",
    "css": "CSS yana ƙawata shafin yanar gizo.",
    "javascript": "JavaScript yana sa shafin ya zama mai motsi.",
    "github": "GitHub yana adana project kuma yana taimakawa developers.",
    "english": "Learning English will help you understand science and AI.",
    "nexora": "NEXORA AI an gina ta domin taimaka wa mutane su koyi ilimi.",
    "assalamualaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "assalamu alaikum": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "salam": "Wa Alaikumus Salam wa Rahmatullahi wa Barakatuh.",
    "founder": "Founder na NEXORA AI shine Yahaya Bello.",
    "country": "NEXORA AI ta fara daga Nigeria.",
    "mission": "Mission: To help people learn, solve problems and build skills.",
    "motto": "Na samu mafita. Na samu malami."
};

// Chat History
let chatHistory = [];

// Send Message
function sendMessage() {

    const input = document.getElementById("message");
    const message = input.value.trim();

    if (message === "") return;

    const key = message.toLowerCase();

    let reply = knowledge[key];

    if (!reply) {
        reply = "Ban san amsar wannan ba tukuna. Amma zan ci gaba da koyo.";
    }

    const time = new Date().toLocaleTimeString();

    chatHistory.push({
        user: message,
        ai: reply,
        time: time
    });

    localStorage.setItem(
        "chatHistory",
        JSON.stringify(chatHistory)
    );

    renderChat();

    input.value = "";
    input.focus();
}

// Render Chat
function renderChat() {

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
