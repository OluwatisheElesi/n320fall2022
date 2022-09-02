// class called fortune cookie  has a constructr that defines its properties
class FortuneCookie {
    // this is a list of items that will be selected randomly
    items
    constructor(items) {
        this.items = items;
    }

    // returns a random entry from the array
pickRandom(){
    return this.items[Math.floor(Math.random() * this.items.length)];

}
}

// using class inheritance
class Fortune extends FortuneCookie {
    // fortune cookie will remeber the element with this code
    outputElement
    constructor(element){
        // super invokes the constructor of hte  class that this is extending to 
        super(["he love of your life is right in front of your eyes","Opportunities don't happen, you create them","Something amazing is coming your way soon", "For every minute you ar angry you lose sixty seconds of happiness", "If you ant the rainbow, you will have to tolerate the rain"])
        this.outputElement = element;
    }

    // this method gives action to the properties; it allows fortun cookie to preform its function 
    open(){
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }
}
    // variable that initiates class 
 let myFortune = new Fortune(document.getElementById("myFortune"));
//  console.log(myFortune.open);
 myFortune.open();