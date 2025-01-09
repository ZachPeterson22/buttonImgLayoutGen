const printArea = document.getElementById("printArea");
const printBtn = document.getElementById("printBtn");
const addImg = document.getElementById("addImg");
const imgUrl = document.getElementById("imgInput");

addImg.addEventListener("click", function() {
    for (let i = 0; i < 6; i++) {
        const mainContainer = document.createElement("div");
        const backgroundContainer = document.createElement("p");
        const imageContainer = document.createElement("div");
        const bckgrnd = document.createElement("img");
        bckgrnd.src = "morablue.png";
        const picture = document.createElement("img");
        picture.src = imgUrl.value;
        printArea.appendChild(mainContainer);
        mainContainer.appendChild(backgroundContainer);
        backgroundContainer.appendChild(bckgrnd);
        mainContainer.appendChild(imageContainer);
        imageContainer.appendChild(picture);
    }
    
});

printBtn.addEventListener("click", function() {
    print();
});
