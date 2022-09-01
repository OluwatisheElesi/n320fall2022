class Courses{
    constructor() {
        this.easy = speech;
        this.hard = math;

    }
    setEasy(newEasy) {
        if(newEasy >= speech){
            this.easy = newEasy
        }else {
            console.error("not an easy course!");
        }
    }
getEasy(){
    return this.easy();
}
        }
