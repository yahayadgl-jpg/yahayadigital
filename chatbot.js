// Database
const database = {
  gaisuwa: [
    { tambaya: "Assalamu Alaikum", amsa: "Wa Alaikumus Salam, barka da zuwa Nexora AI." },
    { tambaya: "Assalamualaikum", amsa: "Wa Alaikumus Salam, barka da zuwa Nexora AI." },
    { tambaya: "Ina kwana?", amsa: "Lafiya kalau, Allah ya sa haka." },
    { tambaya: "Barka da safiya", amsa: "Barka da safiya, Allah ya albarkace ka." },
    { tambaya: "Ina wuni?", amsa: "Lafiya kalau, Allah ya sa haka." },
    { tambaya: "Barka da dare", amsa: "Barka da dare, Allah ya sa ka yi barci lafiya." }
  ],
  adduoi: [
    { tambaya: "Addu'ar safe", amsa: "Allahumma inni asbahtu ush-hiduka wa ush-hidu hamalata arshika..." },
    { tambaya: "Addu'ar tafiya", amsa: "Subhanalladhi sakhkhara lana hatha wama kunna lahu muqrinin..." },
    { tambaya: "Addu'ar cin abinci", amsa: "Allahumma barik lana fima razaqtana waqina adhaban-nar." },
    { tambaya: "Addu'ar shiga gida", amsa: "Allahumma inni as’aluka khairal-mawliji wa khairal-makhraji." }
  ],
  karinMagana: [
    { tambaya: "Ka bani karin magana", amsa: "Ruwa baya tsami banza." },
    { tambaya: "Wani karin magana na Hausa", amsa: "Komai nisan jifa ƙasa zai dawo." },
    { tambaya: "Karin magana game da aiki", amsa: "Aikin gama ya fi aikin fara." },
    { tambaya: "Karin magana game da ilimi", amsa: "Ilmi haske ne, jahilci duhu ne." },
    { tambaya: "Karin magana game da hakuri", amsa: "Hakuri maganin zaman duniya." }
  ]
};

// Nemo amsa (fuzzy search)
function nemoAmsa(tambaya) {
  const input = tambaya.toLowerCase();

  for (let category in database) {
    for (let item of database[category]) {
      if (item.tambaya.toLowerCase() === input) {
        return item.amsa;
      }
      if (input.includes(item.tambaya.toLowerCase()) || item.tambaya.toLowerCase().includes(input)) {
        return item.amsa;
      }
    }
  }
  return "Yi hakuri, ban samu amsa ba. Zaka iya tambaya wani abu daban.";
}

// Aika tambaya
function aikaTambaya() {
  const input = document.getElementById("userInput").value;
  const amsa = nemoAmsa(input);
  document.getElementById("chatBox").innerHTML += "<p><b>Kai:</b> " + input + "</p>";
  document.getElementById("chatBox").innerHTML += "<p><b>Nexora AI:</b> " + amsa + "</p>";
  document.getElementById("userInput").value = "";
}
