class RandomPicker {

    // this is a list of items that will be selected randomly
items
constructor(items) {
    // stores the use set of items
    this.items = items;
}

// returns a random entry from the array
pickRandom(){
    return this.items[Math.floor(Math.random() * this.items.length)];

}
}

// making an isntance of the calss where array is
// let RandomPicker = new RandomPicker(["a", "b", "c"]);
// console.log(randPicker.pickRandom());

// class MagisEight extends RandomPicker {
//     // magic 8 will remeber the element with this code
    
//     constructor(){
//         super(["absoluty","It is certain","perhaps", "very doubtful"])
//     }
// }

// variable that initiates class 
// let myEightBall = new MagicEight();
//     console.log(myEightBall.pickRandom());
// using class inheritance
class MagicEight extends RandomPicker {
    // magic 8 will remeber the element with this code
    outputElement
    constructor(element){
        super(["absoluty","It is certain","perhaps", "very doubtful"])
        this.outputElement = element;
    }

    // this method allows 8v=ball to preform its function 
    shake(){
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }
}

// variable that initiates class 
 let myEightBall = new MagicEight(document.getElementById("magicResponse"));
 
// class MagisEight extends RandomPicker {
    // magic 8 will remeber the element with this code
    
    // constructor(){
    //     super(["absoluty","It is certain","perhaps", "very doubtful"]);
    
    // }


// variable that initiates class 
// let myEightBall = new MagicEight();
// console.log(myEightBall.pickRandom());;
console.log(myEightBall.shake);
myEightBall.shake();

