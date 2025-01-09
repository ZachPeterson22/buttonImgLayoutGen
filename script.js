const printArea = document.getElementById("printArea");
const printBtn = document.getElementById("printBtn");
const addImg = document.getElementById("addImg");
const imgUrl = document.getElementById("imgInput");

addImg.addEventListener("click", function() {
    for (let i = 0; i < 6; i++) {
        const picture = document.createElement("img");
        // comment line 10 out and hardcode a img file if the url doesnt work
        picture.src = imgUrl.value;
        printArea.appendChild(picture);
    }
   
});

printBtn.addEventListener("click", function() {
    print();
});