// create a class to store stuff

class Game {
    // existing variables within final file
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    // refrence to svg in html
    gameZone = document.getElementById("gameZone");

    // constructor
    constructor() {
        // make the circles
        for(var i = 0; i < 25; i++) {
            // create  CIRCLE
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            // circle style class 
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx",Math.random() * 400);
            newCirc.setAttribute("cy",Math.random() * 400);
        }

        // randomly choose what reveal color the circle is 
        if(Math.random() < .3) {
            // set to be the 'looking ofor' color
            newCirc.dataset.hiddenColor = this.searchColor;
            this.totalCircles ++;
        } else {
            newCirc.dataset.hiddenColor = this.normalColor; 

        }
        
        // mouse events
        // on mouse over show the hidden color i the data hidden mcolor attribute
        newCirc.addEventListener("mouseover", (event) => {
            event.target.style.fill = event.target.dataset.hiddenColor;                                                                                                                                                        
        })

        newCirc.addEventListener("mouseout", (event) => {
            event.target.style.fill = "#000000";

        })

        newCirc.addEventListener("click", (event) => {
            if(event.target.dataset.hiddenColor == this.searchColor) {


            }
        })
        // add the circle to the screen
        this.gameZone.appendChild(NewCirc);
    }
}
 let g = new Game();
