let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

let size = 18;

noBtn.addEventListener("click", function() {
    size += 10;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = size + "px";
});
