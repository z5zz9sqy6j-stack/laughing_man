const SQUARE_COUNT = 3;

document.addEventListener('DOMContentLoaded', () => {

    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {
        let square = document.createElement('img');
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";

        square.addEventListener("click", () => {
            alert("OMG YOU CLICKED ME!");
        });

        box.appendChild(square);
    }

});