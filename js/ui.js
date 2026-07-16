// ===============================
// NEXORA AI UI System V4
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

            <h2>🌍 Welcome to NEXORA AI</h2>

            <p><strong>${founder.motto}</strong></p>

            <p>
            NEXORA AI an gina ta domin taimaka wa mutane
            su koyi ilimi, su warware matsaloli,
            kuma su gina ƙwarewa.
            </p>

            <button onclick="showLearn()">
                Start Learning
            </button>

        </div>
    `;
}

// Learn
function showLearn() {

    document.getElementById("content").innerHTML = `
        <div class="home">

            <h2>📚 Learn</h2>

            <p>🐍 Python</p>
            <p>🌐 HTML</p>
            <p>🎨 CSS</p>
            <p>⚡ JavaScript</p>
            <p>🤖 Artificial Intelligence</p>

        </div>
    `;
}

// Chat
function showChat() {

    document.getElementById("content").innerHTML = `
        <div class="home">

            <h2>💬 Chat</h2>

            <p>
            Rubuta saƙonka a akwatin da ke ƙasa.
            </p>

        </div>
    `;
}

// About
function showAbout() {

    document.getElementById("content").innerHTML = `
        <div class="home">

            <h2>ℹ️ About</h2>

            <p><strong>Founder:</strong> ${founder.name}</p>

            <p><strong>Company:</strong> ${founder.company}</p>

            <p><strong>Country:</strong> ${founder.country}</p>

            <p><strong>Motto:</strong> ${founder.motto}</p>

        </div>
    `;
}

// Start App
window.onload = function () {

    showHome();

    loadChat();

};
