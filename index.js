
let scrHome = 0;
let scrGuest = 0;

function updateHome(increment) {
    scrHome += increment;
    document.getElementById("scr-home").textContent = scrHome;    
}

function updateGuest(increment) {
    scrGuest += increment;
    document.getElementById("scr-guest").textContent = scrGuest;
}

function newGame () {
    scrHome = 0;
    scrGuest = 0;
    document.getElementById("scr-home").textContent = scrHome;
    document.getElementById("scr-guest").textContent = scrGuest;
    
}

// function highlighter () {
//     const home = document.getElementById("head-h")
//     const guest = document.getElementById("head-g")
    
//     if (scrHome > scrGuest) {
//         home.classList.add("winner")
//         guest.classList.remove("winner")
//     } else if (scrGuest > scrHome) {
//         guest.classList.add("winner")
//         home.classList.remove("winner")
//     } else {
//         home.classList.remove("winner")
//         guest.classList.remove("winner")
//     }
// }