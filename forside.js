window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}

let pic1 = document.querySelector("#pic1");


document.querySelector("#emne_1").addEventListener("mouseenter", videoPlay);

document.querySelector("#emne_1").addEventListener("mouseleave", videoPause);


function videoPlay() {
    console.log("videoPlay");
    pic1.play;
}



function videoPause() {
    console.log("videoPause");
    pic1.pause;
}
