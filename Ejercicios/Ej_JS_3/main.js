const p1 = document.getElementById("parrafo1");
const p2 = document.getElementById("parrafo2");
const p3 = document.getElementById("parrafo3");

const imgX = document.getElementById("imgX");

function imgClick(X) {
    X.addEventListener("click", function (e) {
        imgX.setAttribute("src", X.innerText);
    } );
}

imgClick(p1);
imgClick(p2);
imgClick(p3);