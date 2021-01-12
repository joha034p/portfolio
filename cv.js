//Event Listeners
window.addEventListener("load", sidenVises);

//Scroll-knappen
window.addEventListener("scroll", scrollFunction);
document.querySelector("#top_knap").addEventListener("click", topFunction);

//Burgermenu knap
document.querySelector("#menuknap").addEventListener("click", toggleMenu);









//Variabler
let top_knap = document.querySelector("#top_knap");
let erSkjult = document.querySelector("#menu").classList.contains("hidden");









//Functions
function sidenVises() {
    console.log(sidenVises);
}

//Scroll-tilbage-til-toppen KNAPPEN
function scrollFunction() {
    console.log(scrollFunction);

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        top_knap.style.display = "block";
    } else {
        top_knap.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Burgermenu der folder sig ud til en "normal" menu
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }
}
