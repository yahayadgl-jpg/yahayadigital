// ===============================
// UI System
// ===============================

// Founder Information
const founder = {
    name: "Yahaya Bello",
    company: "NEXORA AI",
    country: "Nigeria",
    motto: "Na samu mafita. Na samu malami."
};

// Home
function showHome() {

    document.getElementById("content").innerHTML = `
        <div class="home">
            <h2>🌍 Welcome to ${founder.company}</h2>

            <p><strong>Motto:</strong> ${founder.motto}</p>

            <p>
            NEXORA AI an gina ta domin taimaka wa mutane su koyi ilimi,
            su warware matsaloli, kuma su gina ƙwarewa.
            </p>

            <button onclick="showChat()">
                Start Learning
            </button>

        </div>
    `;
}

// Chat
function showChat() {

    document.getElementById("content").innerHTML = `
        <h2>💬 Chat</h2>
        <p>Rubuta saƙonka a akwatin da ke ƙasa.</p>
    `;
}

// Learn
function showLearn() {

    document.getElementById("content").innerHTML = `
        <h2>📚 Learn</h2>

        <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Artificial Intelligence</li>
        </ul>
    `;
}

// About
function showAbout() {

    document.getElementById("content").innerHTML = `
        <h2>ℹ️ About</h2>

        <p><strong>Founder:</strong> ${founder.name}</p>
        <p><strong>Company:</strong> ${founder.company}</p>
        <p><strong>Country:</strong> ${founder.country}</p>
        <p><strong>Motto:</strong> ${founder.motto}</p>
    `;
}

// Start App
window.onload = function () {

    showHome();

    loadChat();

};
