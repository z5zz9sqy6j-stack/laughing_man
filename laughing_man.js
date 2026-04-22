const SQUARE_COUNT = 3;
const TIMER_SPEED = 16.6;
document.addEventListener('DOMContentLoaded', () => {
 document.querySelector(".square").addEventListener("click", () => {
            alert("OMG YOU CLICKED ME!");
        });



    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {

        let square = document.createElement('img');

        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";
        box.appendChild(square);
    }

    Array.from((box.children)).forEach(() => {

        let dx=  5 * Math.random() * 2- 1;
        let dy=  5 * Math.random() * 2- 1;
        

        let x = parseInt(Element.style.left) || 0;
        let y = parseInt(Element.style.top) || 0;
        setInterval(() => {
        x += dx;
        y += dy;
    
        element.style.left = x + "px";
        element.style.top = y + "px";

} , TIMER_SPEED) 
    });     
});