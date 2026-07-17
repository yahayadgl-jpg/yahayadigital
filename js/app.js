// ===============================
// NEXORA AI Version 4.1
// Main Application
// ===============================

const APP = {

    name: "NEXORA AI",

    version: "4.1",

    founder: "Yahaya Bello",

    motto: "Na samu mafita. Na samu malami.",

    start() {

        console.log("================================");

        console.log(this.name);

        console.log("Version:", this.version);

        console.log("Founder:", this.founder);

        console.log(this.motto);

        console.log("Application Started");

        console.log("================================");

        // Load previous chat
        loadMemory();

        // Idan babu chat, nuna welcome message
        if (chatHistory.length === 0) {

            clearChat();

        }

    }

};

window.onload = function () {

    APP.start();

};

// Wannan alert ɗin zai iya zama annoying idan kana testing.
// Idan kana so, za ka iya cire shi daga baya.

// alert("NEXORA AI Version 4.1 Loaded Successfully");
