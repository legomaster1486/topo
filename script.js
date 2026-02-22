const landenLijst = document.getElementById('landenLijst');
const landen = {
    "Canada": "Ottawa",
    "Verenigde Staten": "Washington D.C.",
    "Mexico": "Mexico-Stad",
    "Brazilië": "Brasilia",
    "Argentinië": "Buenos Aires",
    "Marokko": "Rabat",
    "Egypte": "Caïro",
    "D.R. Congo": "Kinshasa",
    "Zuid-Afrika": "Kaapstad",
    "Rusland": "Moskou",
    "Turkije": "Ankara",
    "Iran": "Teheran",
    "India": "New-Delhi",
    "China": "Beijing",
    "Japan": "Tokyo",
    "Thailand": "Bangkok",
    "Indonesië": "Jakarta",
    "Australië": "Canberra",
    "Nieuw-Zeeland": "Wellington",
    "Colombia": "Bogota",
    "Venezuela": "Caracas",
    "Gyuana": "Georgetown",
    "Suriname": "Paramaribo",
    "Frans-Guyana": "Cayenne",
    "Peru": "Lima",
    "Bolivia": "La Paz & Sucre",
    "Chili": "Santiago",
    "Groenland": "Nuük",
    "Mali": "Bamako",
    "Nigeria": "Abuja",
    "Ethiopië": "Addis Abeba",
    "Somalië": "Mogadishu",
    "Palestina": "Oost-Jeruzalem",
    "Israël": "Jeruzalem",
    "Saoedi-Arabië": "Riyad",
    "Qatar": "Doha",
    "Irak": "Bagdad",
    "Afghanistan": "Kabul",
    "Pakistan": "Islamabad",
    "Bangladesh": "Dhaka",
    "Noord-Korea": "Pyongyang",
    "Zuid-Korea": "Seoul",
    "IJsland": "Reykjavik",
    "Noorwegen": "Oslo",
    "Zweden": "Stockholm",
    "Finland": "Helsinki",
    "Denemarken": "Kopenhagen",
    "België": "Brussel",
    "G.H. Luxemburg": "Luxemburg",
    "Nederland": "Amsterdam",
    "Verenigd Koningrijk": "Londen",
    "Ierland": "Dublin",
    "Frankrijk": "Parijs",
    "Zwitserland": "Bern",
    "Duitsland": "Berlijn",
    "Oostenrijk": "Wenen",
    "Polen": "Warschau",
    "Tsjechië": "Praag",
    "Slowakije": "Bratislava",
    "Hongarije": "Boedapest",
    "Kroatië": "Zagreb",
    "Slovenië": "Ljubljana",
    "Estland": "Tallinn",
    "Letland": "Riga",
    "Litouwen": "Vilnius",
    "Rusland": "Moskou",
    "Wit-Rusland": "Minsk",
    "Oekraïne": "Kiev",
    "Roemenië": "Boekarest",
    "Moldavië": "Chisinau",
    "Bulgarije": "Sofia",
    "Portugal": "Lissabon",
    "Spanje": "Madrid",
    "Italië": "Rome",
    "Bosnië-Herzegovina": "Sarajevo",
    "Noord-Macedonië": "Skopje",
    "Servië": "Belgrado",
    "Montenegro": "Podgorica",
    "Albanië": "Tirana",
    "Griekenland": "Athene",
    "Cyprus": "Nicosia",
    "Malta": "Valletta",
    "Turkije": "Ankara",
}


document.querySelector("#start").addEventListener("click", startQuiz)
const vraagElement = document.getElementById('vraagContainer');


const alle = document.querySelector('#select-all');
const enkelEuropa = document.querySelector('#select-europe');

const checkboxes = document.querySelectorAll('input[type="checkbox"][id="land"]');
const europaLanden = document.querySelectorAll('input[type="checkbox"][class="europe"]');

enkelEuropa.addEventListener('change', function() {
    europaLanden.forEach(cb => cb.checked = enkelEuropa.checked);
});

alle.addEventListener('change', function() {
    checkboxes.forEach(cb => cb.checked = alle.checked);
});




function vraag(geselecteerdeLanden) {
    const i = Math.floor(Math.random() * geselecteerdeLanden.length);
    vraagElement.style.color = "black";
    vraagElement.innerHTML = `<div class="vraag">Wat is de hoofdstad van ${geselecteerdeLanden[i]}?
    <input type="text" id="antwoord-${i}" class="antwoord">
    <button class="controle" onclick="controleerAntwoord('${geselecteerdeLanden[i]}', ${i})">Controleer</button>
    </div>`;
    geselecteerdeLanden.pop(i);
}


function startQuiz() {
    const geselecteerdeLanden = Array.from(document.querySelectorAll('input[id="land"]:checked')).map(cb => cb.name);
    if (geselecteerdeLanden.length === 0) {
        alert("Selecteer minstens één land om te beginnen met de quiz.");
    } else {

    vraag(geselecteerdeLanden);
}
}


function controleerAntwoord(land, index) {
    const antwoordInput = document.getElementById(`antwoord-${index}`);
    if (antwoordInput.value === landen[land]) {
        vraagElement.innerHTML = `Correct! De hoofdstad van ${land} is inderdaad ${landen[land]}.<button id="next" onclick="startQuiz()">Volgende vraag</button>`;
        vraagElement.style.color = "green";
    } else {
        vraagElement.innerHTML = `Fout! Het juiste antwoord is ${landen[land]}.<button id="next" onclick="startQuiz()">Volgende vraag</button>`;
        vraagElement.style.color = "red";
    }
}



