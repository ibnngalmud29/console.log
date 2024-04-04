const myTimeout = setTimeout(kasihblink,4000)
let klik = document.getElementById("clickme");


function kasihblink()
{
klik.setAttribute("class", "blink");
}


klik.addEventListener("click", function(e){
    let body = document.querySelector("body");
    body.setAttribute("class", "portfolio-experiment");
    let kotak = document.getElementById("kotak");
    kotak.classList.add("experiment-title");
    let bold = document.querySelector("bold")
    bold.removeAttribute("style");
    const myTimeout2 = setTimeout(pindah,2500)  
})

function pindah() {
    window.location.href = "index.html";
}