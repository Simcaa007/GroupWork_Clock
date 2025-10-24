function hodiny(){
    const datum = new Date();
    const h = datum.getHours().toString().padStart(2, '0');
    const m = datum.getMinutes().toString().padStart(2, '0');
    const s = datum.getSeconds().toString().padStart(2, '0');

    document.getElementById("hodiny").innerHTML =  h  + ":" + m + ":" + s ;
}

hodiny();
setInterval(hodiny, 1000);


function datum(){
    const datum = new Date();
    const d = datum.getDay();

    var denCisla = datum.getDate();
    var mesic = datum.getMonth() + 1;
    var rok = datum.getFullYear();

    var textDne = "";
    var textMesice = "";

    switch(d){
        case 1: textDne = "Pondělí"; break;
        case 2: textDne = "Úterý"; break;
        case 3: textDne = "Středa"; break;
        case 4: textDne = "Čtvrtek"; break;
        case 5: textDne = "Pátek"; break;
        case 6: textDne = "Sobota"; break;
        case 7: textDne = "Neděle"; break;
    }

    switch (mesic){
        case 1: textMesice = "ledna"; break;
        case 2: textMesice = "února"; break;
        case 3: textMesice = "března"; break;
        case 4: textMesice = "dubna"; break;
        case 5: textMesice = "května"; break;
        case 6: textMesice = "června"; break;
        case 7: textMesice = "července"; break;
        case 8: textMesice = "srpna"; break;
        case 9: textMesice = "zaří"; break;
        case 10: textMesice = "října"; break;
        case 11: textMesice = "listopadu"; break;
        case 12: textMesice = "prosince"; break;

    }


    document.getElementById("datum").innerHTML = textDne + " " + denCisla + ". " + textMesice + " " + rok;
}

datum();


window.addEventListener("load", () => {
      const overlay = document.querySelector(".overlay");
      overlay.style.opacity = "0";

      // Odstranění překryvu po dokončení přechodu
      setTimeout(() => {
        overlay.remove();
      }, 2000);
});


document.getElementById("ikona-nastaveni").addEventListener("click", () => {
    
    

});