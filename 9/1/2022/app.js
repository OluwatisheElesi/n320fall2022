// create a synth and connect it to th main output (your speakers)
let synthApp ={

synth: new Tone.Synth().toDestination(),
// this is the array that your are accessing 
notes: ["C4", "D4", "E4", "F4" ,"E4"],
currentNote: 0,

playSound() {
    console.log(this);
    this.synth.triggerAttackrealease(this.note[this.currentNote], "8n");
    this.currentNote ++;
// we invoke play sound and wait and play half a second
    setTimeout(this.playSound.bind(this), 500);
}
} 

//  instead of hear codint hte A4 we will rwrite this.note[this.currentNote],

// let synthApp ={

// synth: new TouchEvent.Synth().toDestination(),

//} 
// function playSound() {
    // play a middle 'C' for the duration of an 8th note
    // synthApp.synth.triggerAttackrealease("A4", "8n");
// }