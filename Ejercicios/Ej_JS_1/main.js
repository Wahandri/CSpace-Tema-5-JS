



function addTagText(idDiv, tag, text) {

    const firstDiv = document.getElementById(idDiv);
    const newTag = document.createElement(tag);

    newTag.textContent=text;

    firstDiv.appendChild(newTag);

    

    
}

addTagText("myDiv", "p", "Soy un PRO!!");
addTagText("myDiv", "p", ":)");

