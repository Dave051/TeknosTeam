function temavalt() {
    document.body.classList.toggle("sotet-tema")


    var kep = document.getElementById("temaKep")
    if (document.body.classList.contains("sotet-tema")){
        kep.src = "img/hold.png"
    } else{
        kep.src = "img/nap.png"
    }
}