function hodiny() {
    const offset = parseInt(localStorage.getItem("timeOffset")) || 0;
    const datum = new Date(Date.now() + offset * 60000);
    const h = datum.getHours().toString().padStart(2, '0');
    const m = datum.getMinutes().toString().padStart(2, '0');
    const s = datum.getSeconds().toString().padStart(2, '0');

    document.getElementById("hodiny").textContent = `${h}:${m}:${s}`;
}

hodiny();
setInterval(hodiny, 1000);

function zobrazDatum() {
    const offset = parseInt(localStorage.getItem("timeOffset")) || 0;
    const datum = new Date(Date.now() + offset * 60000);

    const dny = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
    const mesice = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];

    const text = `${dny[datum.getDay()]} ${datum.getDate()}. ${mesice[datum.getMonth()]} ${datum.getFullYear()}`;
    document.getElementById("datum").textContent = text;
}

zobrazDatum();
setInterval(zobrazDatum, 60000);

window.addEventListener("load", () => {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 2000);
    }

    const ulozenyOffset = localStorage.getItem("timeOffset");
    if (ulozenyOffset !== null && offsetInput) {
        offsetInput.value = ulozenyOffset;
    }
});

const ikonaNastaveni = document.getElementById("ikona-nastaveni");
const panel = document.getElementById("settingsPanel");
const ulozitBtn = document.getElementById("saveSettings");
const offsetInput = document.getElementById("offset");

ikonaNastaveni.addEventListener("click", () => {
    panel.classList.toggle("open");
});


// Uložit po kliknutí na tlačítko
ulozitBtn.addEventListener("click", () => {
    ulozPosun();
});

// Uložit po stisknutí Enter v inputu
offsetInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        ulozPosun();
    }
});

// Funkce pro uložení posunu a další akce
function ulozPosun() {
    const value = offsetInput.value.trim();
    if (value === "") return;

    localStorage.setItem("timeOffset", value);
    zobrazAlert(`Nastavení uloženo: ${value} min`);

    hodiny();
    zobrazDatum();

    panel.classList.remove("open");
}


function zobrazAlert(text) {
    const alert = document.createElement("div");
    alert.className = "custom-alert";
    alert.textContent = text;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.animation = "fadeOut 0.6s forwards";
        setTimeout(() => alert.remove(), 600);
    }, 2500);
}

document.addEventListener("click", (e) => {
    if (!panel.classList.contains("open")) return;

    const klikUVnitrPanelu = panel.contains(e.target);
    const klikNaIkonu = ikonaNastaveni.contains(e.target);

    if (!klikUVnitrPanelu && !klikNaIkonu) {
        panel.classList.remove("open");
    }
});
